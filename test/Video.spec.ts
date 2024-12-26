import { expect } from '@jest/globals';
import fs from 'fs';
import crypto from 'crypto';
import W3StreamError from '../src/W3StreamError';
import path from 'path';
import { mockTestClient, anonymousMockTestClient } from './src/mockTestClient';
import { createTempVTTFile } from './VideoChapter.spec';
import { v4 as uuidv4 } from 'uuid';
let testVideoID: string;
const title = 'Test Video';
const description = 'Test Description';
const testLang = 'en';

const testVideoCaptionID = '598b9aaa-f2dc-4622-9dfb-d1993a9c6165';

async function getVideoFilePath(fileName: string): Promise<string> {
  return path.join(__dirname, '/data', fileName);
}

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

export async function openTestImageFile(): Promise<fs.ReadStream> {
  const filePath = path.join(__dirname, 'data', 'logo.png');
  const fileReadable = fs.createReadStream(filePath);
  return fileReadable;
}

export async function openInvalidFile(): Promise<fs.ReadStream> {
  const filePath = path.join(__dirname, 'data', 'invalid-file.txt');
  const fileReadable = fs.createReadStream(filePath);
  return fileReadable;
}

function getFileHash(file: fs.ReadStream): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');

    file.on('data', (data) => {
      hash.update(data);
    });

    file.on('end', () => {
      resolve(hash.digest('hex'));
    });

    file.on('error', (err) => {
      reject(err);
    });
  });
}
describe('Video Service', () => {
  describe('create', () => {
    it('Valid Complete Request', async () => {
      const resp = await testClient.video.create({
        title: 'Test Video',
        description: 'Test Description',
        isPublic: true,
        metadata: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
        qualities: ['240p'],
        tags: ['tag1', 'tag2'],
      });
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      testVideoID = resp.data?.id as string;
    });

    it('Name create oversize video', async () => {
      const resp = await testClient.video.create({
        title: 'Test Video',
        qualities: ['720p'],
      });
    });

    it('Valid Minimal Request', async () => {
      const resp = await testClient.video.create({
        title: 'Test Video',
        qualities: ['720p'],
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Title - Empty', async () => {
      await expect(
        testClient.video.create({
          qualities: ['720p'],
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Title - Too Long', async () => {
      await expect(
        testClient.video.create({
          title: 'a'.repeat(256),
          qualities: ['720p'],
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Description - Too Long', async () => {
      await expect(
        testClient.video.create({
          title: 'Test Video',
          description: 'a'.repeat(1001),
          qualities: ['720p'],
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Metadata - Key Too Long', async () => {
      await expect(
        testClient.video.create({
          title: 'Test Video',
          qualities: ['720p'],
          metadata: [{ key: 'a'.repeat(256), value: 'value' }],
        })
      ).rejects.toThrow();
    });

    it('Invalid Qualities - Invalid Value', async () => {
      await expect(
        testClient.video.create({
          title: 'Test Video',
          qualities: ['invalid_quality'],
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('update', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.video.update(testVideoID, {
          title: title,
          description: description,
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Update All Fields', async () => {
      const resp = await testClient.video.update(testVideoID, {
        title: title,
        description: description,
      });
      expect(resp).toBeDefined();
    });

    it('Valid Update Title Only', async () => {
      const resp = await testClient.video.update(testVideoID, {
        title: title,
      });
      expect(resp).toBeDefined();
    });

    it('Valid Update Description Only', async () => {
      const resp = await testClient.video.update(testVideoID, {
        description: description,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Title Length', async () => {
      await expect(
        testClient.video.update(testVideoID, {
          title: 'a'.repeat(256),
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.update('invalid-id', {
          title: title,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Non-existent Video ID', async () => {
      await expect(
        testClient.video.update('non-existent-id', {
          title: title,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.update(newId, {
          title: title,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getDetail', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.video.getDetail(testVideoID)
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Get Detail', async () => {
      const resp = await testClient.video.getDetail(testVideoID);
      expect(resp.data?.id).toBeDefined();
      expect(resp.data?.title).toBeDefined();
      expect(resp.status).toBeDefined();
    });

    it('Invalid ID Format', async () => {
      await expect(testClient.video.getDetail('invalid-uuid')).rejects.toThrow(
        W3StreamError
      );
    });

    it('Non-existent ID', async () => {
      await expect(
        testClient.video.getDetail('non-existent-id')
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty ID', async () => {
      await expect(testClient.video.getDetail('')).rejects.toThrow(
        W3StreamError
      );
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.video.getDetail(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('uploadThumbnail', () => {
    let validThumbnail: fs.ReadStream;

    it('Upload thumbnail other', async () => {
      validThumbnail = await openTestImageFile();
      await expect(
        anonymousTestClient.video.uploadThumbnail(testVideoID, validThumbnail)
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Thumbnail Upload', async () => {
      validThumbnail = await openTestImageFile();
      const resp = await testClient.video.uploadThumbnail(
        testVideoID,
        validThumbnail
      );
      expect(resp).toBeDefined();
    });

    it('Invalid File Type', async () => {
      const invalidFile = await openInvalidFile();
      await expect(
        testClient.video.uploadThumbnail(testVideoID, invalidFile)
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.uploadThumbnail('invalid-id', validThumbnail)
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.uploadThumbnail(newId, validThumbnail)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getCost', () => {
    it('Valid Single Quality', async () => {
      const resp = await testClient.video.getCost('720p', 120.5);
      expect(resp).toBeDefined();
    });

    it('Valid Multiple Qualities', async () => {
      const resp = await testClient.video.getCost('720p,1080p', 120.5);
      expect(resp).toBeDefined();
    });

    it('Invalid Quality', async () => {
      await expect(testClient.video.getCost('invalid', 120.5)).rejects.toThrow(
        W3StreamError
      );
    });

    it('Empty Quality', async () => {
      await expect(testClient.video.getCost('', 120.5)).rejects.toThrow(
        W3StreamError
      );
    });

    it('Negative Duration', async () => {
      await expect(testClient.video.getCost('720p', -1)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('getVideoList', () => {
    it('Valid Get Video List With No Filter', async () => {
      const resp = await testClient.video.getVideoList();
      expect(resp).toBeDefined();
    });

    it('Valid Get Video List With Filter', async () => {
      const resp = await testClient.video.getVideoList({
        limit: 1,
        offset: 0,
        orderBy: 'desc',
        sortBy: 'created_at',
      });
      expect(resp).toBeDefined();
    });
  });

  describe('uploadPart', () => {
    it('Valid File Upload', async () => {
      const video = await getVideoFilePath('558k.mp4');
      const resp = await testClient.video.uploadPart(testVideoID, video);
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      const video = await getVideoFilePath('558k.mp4');
      const videoFile = fs.createReadStream(video);
      const videoHash = await getFileHash(videoFile);
      await expect(
        testClient.video.uploadPart('invalid-id', video, videoHash, '1')
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      const video = await getVideoFilePath('558k.mp4');
      await expect(testClient.video.uploadPart(newId, video)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('uploadVideoComplete', () => {
    it('Valid Get Upload When Video Completes', async () => {
      const resp = await testClient.video.uploadVideoComplete(testVideoID);
      expect(resp).toBeDefined();
    });

    it('Upload when low balance', async () => {
      const resp = await anonymousTestClient.video.create({
        title: 'Test Video',
        description: 'Test Description',
        isPublic: true,
        metadata: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
        qualities: ['240p'],
        tags: ['tag1', 'tag2'],
      });
      const testLowBalanceVideoID = resp.data?.id as string;
      const video = await getVideoFilePath('558k.mp4');
      await anonymousTestClient.video.uploadPart(testLowBalanceVideoID, video);
      await expect(
        anonymousTestClient.video.uploadVideoComplete(testLowBalanceVideoID)
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.uploadVideoComplete('invalid-id')
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(testClient.video.uploadVideoComplete('')).rejects.toThrow(
        W3StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.video.uploadVideoComplete(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('getVideoPlayerInfo', () => {
    it('Valid Get Video Player Info', async () => {
      const resp = await testClient.video.getVideoPlayerInfo({
        id: testVideoID,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.getVideoPlayerInfo({
          id: 'invalid-id',
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.video.getVideoPlayerInfo({
          id: '',
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.getVideoPlayerInfo({
          id: newId,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('createCaption', () => {
    it('Valid Create Video Captions', async () => {
      const tmpFilePath = await createTempVTTFile();
      const resp = await testClient.video.createCaption(
        testVideoCaptionID,
        testLang,
        tmpFilePath
      );
      expect(resp).toBeDefined();
    });

    it('Empty Language', async () => {
      const tmpFile = await createTempVTTFile();
      await expect(
        testClient.video.createCaption(testVideoCaptionID, '', tmpFile)
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Video ID', async () => {
      const tmpFile = await createTempVTTFile();
      await expect(
        testClient.video.createCaption('invalid-id', testLang, tmpFile)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getCaptions', () => {
    it('Valid Get Video Captions', async () => {
      const resp = await testClient.video.getCaptions({
        id: testVideoCaptionID,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.getCaptions({
          id: 'invalid-id',
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Empty Video ID', async () => {
      await expect(
        testClient.video.getCaptions({
          id: '',
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.getCaptions({
          id: newId,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('setDefaultCaption', () => {
    it('Valid Set Default Caption', async () => {
      const resp = await testClient.video.setDefaultCaption(
        testVideoCaptionID,
        testLang
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.setDefaultCaption('invalid-id', testLang)
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.video.setDefaultCaption('', testLang)
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.setDefaultCaption(newId, testLang)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('deleteCaption', () => {
    it('Valid Delete Video Captions', async () => {
      const resp = await testClient.video.deleteCaption(
        testVideoCaptionID,
        testLang
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.video.deleteCaption('invalid-id', testLang)
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.video.deleteCaption(newId, testLang)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('Delete Video', () => {
    beforeAll(async () => {
      const resp = await testClient.video.create({
        title: title,
        description: description,
        isPublic: true,
        metadata: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
        qualities: ['240p'],
        tags: ['tag1', 'tag2'],
      });
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      testVideoID = resp.data?.id as string;
    });

    it('Delete other', async () => {
      await expect(
        anonymousTestClient.video.delete(testVideoID)
      ).rejects.toThrow(W3StreamError);
    });

    it('Valid Delete', async () => {
      if (!testVideoID) {
        throw new Error(
          'Video ID is not defined. Ensure the video is created before deletion tests.'
        );
      }
      const resp = await testClient.video.delete(testVideoID);
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(testClient.video.delete('invalid-id')).rejects.toThrow(
        W3StreamError
      );
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.video.delete(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });
});
