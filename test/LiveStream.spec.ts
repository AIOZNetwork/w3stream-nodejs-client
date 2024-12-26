import { expect } from '@jest/globals';
import W3StreamError from '../src/W3StreamError';
import { anonymousMockTestClient, mockTestClient } from './src/mockTestClient';
import { v4 as uuidv4 } from 'uuid';
let liveStreamKeyID: string;
let streamId: string;
const liveStreamKeyName = 'name';
const streamingTitle = 'title';
const qualities = ['1080p', '720p', '360p'];

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

describe('LiveStream Service', () => {
  describe('createLiveStreamKey', () => {
    it('Valid Create Live Stream Key', async () => {
      const resp = await testClient.liveStream.createLiveStreamKey({
        name: liveStreamKeyName,
        save: true,
      });
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      liveStreamKeyID = resp.data?.id as string;
    });

    it('Invalid Create Live Stream Key with Name is nil', async () => {
      await expect(
        testClient.liveStream.createLiveStreamKey({
          name: undefined,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Valid Create Live Stream Key with Save is nil', async () => {
      const resp = await testClient.liveStream.createLiveStreamKey({
        name: liveStreamKeyName,
        save: undefined,
      });
      expect(resp).toBeDefined();
    });
  });

  describe('getLiveStreamKey', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.liveStream.getLiveStreamKey(liveStreamKeyID)
      ).rejects.toThrow(Error);
    });
    it('Valid Get Live Stream Key', async () => {
      const resp = await testClient.liveStream.getLiveStreamKey(
        liveStreamKeyID
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Get Live Stream Key', async () => {
      await expect(
        testClient.liveStream.getLiveStreamKey('invalid-id')
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.liveStream.getLiveStreamKey(newId)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getLiveStreamKeys', () => {
    it('Valid Get Live Stream Keys with Limit, Offset, OrderBy, SortBy', async () => {
      const resp = await testClient.liveStream.getLiveStreamKeys({
        limit: 10,
        offset: 0,
        orderBy: 'desc',
        sortBy: 'created_at',
      });
      expect(resp).toBeDefined();
    });
    it('Valid Get Live Stream Keys with Search', async () => {
      const resp = await testClient.liveStream.getLiveStreamKeys({
        search: liveStreamKeyName,
      });
      expect(resp).toBeDefined();
    });
    it('Valid Get Live Stream Keys with no fields', async () => {
      const resp = await testClient.liveStream.getLiveStreamKeys({});
      expect(resp).toBeDefined();
    });
  });

  describe('updateLiveStreamKey', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.liveStream.updateLiveStreamKey(liveStreamKeyID, {
          name: liveStreamKeyName,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Update Live Stream Key', async () => {
      const resp = await testClient.liveStream.updateLiveStreamKey(
        liveStreamKeyID,
        {
          name: liveStreamKeyName,
          save: true,
        }
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Update Live Stream Key with Name is nil', async () => {
      const resp = await testClient.liveStream.updateLiveStreamKey(
        liveStreamKeyID,
        {
          name: undefined,
        }
      );
      expect(resp).toBeDefined();
    });

    it('Valid Update Live Stream Key with Save is nil', async () => {
      const resp = await testClient.liveStream.updateLiveStreamKey(
        liveStreamKeyID,
        {
          name: liveStreamKeyName,
          save: undefined,
        }
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Update Live Stream Key with ID is empty', async () => {
      await expect(
        testClient.liveStream.updateLiveStreamKey('', {
          name: liveStreamKeyName,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.liveStream.updateLiveStreamKey(newId, {
          name: liveStreamKeyName,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getLiveStreamVideo', () => {
    it('Valid Get Live Stream Videos', async () => {
      const resp = await testClient.liveStream.getLiveStreamVideos(
        liveStreamKeyID,
        {
          limit: 10,
          offset: 0,
          sortBy: 'created_at',
          orderBy: 'desc',
        }
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Get Live Stream Videos', async () => {
      await expect(
        testClient.liveStream.getLiveStreamVideos('invalid-id', {})
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Get Live Stream Videos with Offset is -1', async () => {
      await expect(
        testClient.liveStream.getLiveStreamVideos(liveStreamKeyID, {
          offset: -1,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Get Live Stream Videos with SortBy is empty', async () => {
      await expect(
        testClient.liveStream.getLiveStreamVideos(liveStreamKeyID, {
          sortBy: '',
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Get Live Stream Videos with OrderBy is empty', async () => {
      await expect(
        testClient.liveStream.getLiveStreamVideos(liveStreamKeyID, {
          orderBy: '',
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Get Live Stream Videos with Search is empty', async () => {
      await expect(
        testClient.liveStream.getLiveStreamVideos(liveStreamKeyID, {
          search: '',
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('createStreaming', () => {
    it('Valid Create Streaming', async () => {
      const resp = await testClient.liveStream.createStreaming(
        liveStreamKeyID,
        {
          title: streamingTitle,
          qualities: qualities,
          save: false,
        }
      );
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      streamId = resp.data?.id as string;
    });

    it('Invalid Create Streaming with Invalid ID', async () => {
      await expect(
        testClient.liveStream.createStreaming('invalid-id', {
          title: streamingTitle,
          qualities: qualities,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Create Streaming with Title is nil', async () => {
      await expect(
        testClient.liveStream.createStreaming(liveStreamKeyID, {
          title: undefined,
          qualities: qualities,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Create Streaming with Qualities is nil', async () => {
      await expect(
        testClient.liveStream.createStreaming(liveStreamKeyID, {
          title: streamingTitle,
          qualities: undefined,
          save: true,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getStreaming', () => {
    it('Valid Get Streaming', async () => {
      const resp = await testClient.liveStream.getStreaming(
        liveStreamKeyID,
        streamId
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Get Streaming', async () => {
      await expect(
        testClient.liveStream.getStreaming('invalid-id', 'invalid-stream-id')
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.liveStream.getStreaming(newId, newId)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('getStreamings', () => {
    it('Valid Get Streamings', async () => {
      const resp = await testClient.liveStream.getStreamings(liveStreamKeyID);
      expect(resp).toBeDefined();
    });

    it('Invalid Get Streamings', async () => {
      await expect(
        testClient.liveStream.getStreamings('invalid-id')
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('deleteLiveStreamVideo', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.liveStream.deleteLiveStreamVideo(streamId)
      ).rejects.toThrow(Error);
    });
    it('Valid Delete Live Stream Video', async () => {
      const resp = await testClient.liveStream.deleteLiveStreamVideo(streamId);
      expect(resp).toBeDefined();
    });

    it('Invalid Delete Live Stream Video', async () => {
      await expect(
        testClient.liveStream.deleteLiveStreamVideo('invalid-id')
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.liveStream.deleteLiveStreamVideo(newId)
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('deleteLiveStreamKey', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.liveStream.deleteLiveStreamKey(liveStreamKeyID)
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Delete Live Stream Key with ID', async () => {
      const resp = await testClient.liveStream.deleteLiveStreamKey(
        liveStreamKeyID
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Delete Live Stream Key with Invalid ID', async () => {
      await expect(
        testClient.liveStream.deleteLiveStreamKey('invalid-id')
      ).rejects.toThrow(W3StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.liveStream.deleteLiveStreamKey(newId)
      ).rejects.toThrow(W3StreamError);
    });
  });
});
