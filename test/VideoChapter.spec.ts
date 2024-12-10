import { expect } from '@jest/globals';
import W3StreamError from '../src/W3StreamError';
import fs from 'fs';
import path from 'path';
import { mockTestClient } from './src/mockTestClient';

const testLang = 'en';
const testVideoIDForChapter = '16b0fb26-6d9c-4adc-a86e-026bd47a6a3a';
const chapterContent = `WEBVTT

00:00:00.000 --> 00:01:00.000
Chapter 1

00:01:00.000 --> 00:02:00.000
Chapter 2`;

let tmpFilePath: string;

export async function createTempVTTFile(): Promise<fs.ReadStream> {
  tmpFilePath = path.join(__dirname, 'test-*.vtt');
  fs.writeFileSync(tmpFilePath, chapterContent);
  return fs.createReadStream(tmpFilePath);
}

export function deleteTempVTTFile(filePath: string) {
  fs.unlinkSync(filePath);
}

const testClient = mockTestClient();

describe('VideoChapter Service', () => {
  describe('CreateVideoChapter', () => {
    it('Valid Create', async () => {
      const tmpFilePath = await createTempVTTFile();
      const response = await testClient.videoChapter.create(
        testVideoIDForChapter,
        testLang,
        tmpFilePath
      );
      expect(response).toBeDefined();
      tmpFilePath.close();
    });

    it('Invalid Video ID', async () => {
      const tmpFilePath = await createTempVTTFile();
      await expect(
        testClient.videoChapter.create('invalid-id', testLang, tmpFilePath)
      ).rejects.toThrow(W3StreamError);
      tmpFilePath.close();
    });

    it('Invalid Language', async () => {
      const tmpFilePath = await createTempVTTFile();
      await expect(
        testClient.videoChapter.create(
          testVideoIDForChapter,
          'invalid',
          tmpFilePath
        )
      ).rejects.toThrow(W3StreamError);
      tmpFilePath.close();
    });

    afterEach(() => {
      deleteTempVTTFile(tmpFilePath);
    });
  });

  describe('GetVideoChapters', () => {
    it('Valid Get', async () => {
      const response = await testClient.videoChapter.get({
        id: testVideoIDForChapter,
        limit: 10,
        offset: 0,
      });
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.videoChapter.get({
          id: 'invalid-id',
          limit: 10,
          offset: 0,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('DeleteVideoChapter', () => {
    it('Valid Delete', async () => {
      const response = await testClient.videoChapter.delete(
        testVideoIDForChapter,
        testLang
      );
      expect(response).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.videoChapter.delete('invalid-id', testLang)
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.videoChapter.delete('', testLang)
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Language', async () => {
      await expect(
        testClient.videoChapter.delete(testVideoIDForChapter, '')
      ).rejects.toThrow(W3StreamError);
    });
  });
});
