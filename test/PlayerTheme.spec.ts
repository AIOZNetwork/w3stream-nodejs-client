import { expect } from '@jest/globals';
import W3StreamError from '../src/W3StreamError';
import fs from 'fs';
import { anonymousMockTestClient, mockTestClient } from './src/mockTestClient';
import { openInvalidFile, openTestImageFile } from './Video.spec';
import { v4 as uuidv4 } from 'uuid';
let testPlayerIDForUpdateAndDeleteAndGet: string | undefined;
const playerName = 'Test Player Theme';
const logoURL = 'https://example.com/logo.png';
const testVideoForPlayer = '598b9aaa-f2dc-4622-9dfb-d1993a9c6165';

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

describe('Players Service', () => {
  describe('create', () => {
    it('Valid Create with All Fields', async () => {
      const response = await testClient.players.create({
        name: playerName,
        isDefault: true,
        controls: {
          enableApi: true,
          enableControls: true,
          forceAutoplay: false,
          forceLoop: false,
          hideTitle: false,
        },
        theme: {
          controlBarBackgroundColor: '#ffffff',
          controlBarHeight: '100px',
          mainColor: '#ffffff',
          menuBackgroundColor: '#ffffff',
          menuItemBackgroundHover: '#cccccc',
          progressBarCircleSize: '10px',
          progressBarHeight: '10px',
          textColor: '#ffffff',
          textTrackBackground: '#ffffff',
          textTrackColor: '#ffffff',
        },
      });
      expect(response).toBeDefined();
      testPlayerIDForUpdateAndDeleteAndGet = response.data?.playerTheme?.id;
    });

    it('Valid Create with Some Required Fields Only', async () => {
      const response = await testClient.players.create({
        name: playerName,
        isDefault: true,
        theme: {
          controlBarBackgroundColor: '#ffffff',
          controlBarHeight: '100px',
        },
      });
      expect(response).toBeDefined();
    });

    it('Invalid Color Code', async () => {
      await expect(
        testClient.players.create({
          name: playerName,
          theme: {
            textColor: 'invalid-color',
          },
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Name', async () => {
      const response = await testClient.players.create({
        theme: {
          textColor: '#ffffff',
        },
      });
      expect(response).toBeDefined();
    });

    it('Invalid Size Format', async () => {
      await expect(
        testClient.players.create({
          name: playerName,
          theme: {
            controlBarHeight: 'invalid-size',
          },
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('uploadLogo', () => {
    let logoFile: fs.ReadStream;
    let invalidFile: fs.ReadStream;

    beforeAll(async () => {
      logoFile = await openTestImageFile();
      invalidFile = await openInvalidFile();
    });

    it('Valid Upload', async () => {
      const response = await testClient.players.uploadLogo(
        testPlayerIDForUpdateAndDeleteAndGet as string,
        logoFile,
        logoURL
      );
      expect(response).toBeDefined();
    });

    it('Invalid Player ID', async () => {
      await expect(
        testClient.players.uploadLogo('invalid-id', logoFile, logoURL)
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid File Type', async () => {
      await expect(
        testClient.players.uploadLogo(
          testPlayerIDForUpdateAndDeleteAndGet as string,
          invalidFile,
          logoURL
        )
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid Upload Link', async () => {
      await expect(
        testClient.players.uploadLogo(
          testPlayerIDForUpdateAndDeleteAndGet as string,
          logoFile,
          'invalid-link'
        )
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('addPlayer', () => {
    it('Valid Add', async () => {
      const response = await testClient.players.addPlayer({
        playerThemeId: testPlayerIDForUpdateAndDeleteAndGet as string,
        videoId: testVideoForPlayer,
      });
      expect(response).toBeDefined();
    });

    it('Invalid Player ID', async () => {
      await expect(
        testClient.players.addPlayer({
          playerThemeId: 'invalid-id',
          videoId: testVideoForPlayer,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.players.addPlayer({
          playerThemeId: testPlayerIDForUpdateAndDeleteAndGet,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('get', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.players.get(
          testPlayerIDForUpdateAndDeleteAndGet as string
        )
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Get', async () => {
      const response = await testClient.players.get(
        testPlayerIDForUpdateAndDeleteAndGet as string
      );
      expect(response).toBeDefined();
      expect(response.data?.playerTheme?.id).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(testClient.players.get('invalid-id')).rejects.toThrow(
        W3StreamError
      );
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.players.get(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('update', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.players.update(
          testPlayerIDForUpdateAndDeleteAndGet as string,
          {
            name: 'Updated Player Theme',
          }
        )
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Update', async () => {
      const response = await testClient.players.update(
        testPlayerIDForUpdateAndDeleteAndGet as string,
        {
          name: 'Updated Player Theme',
          theme: {
            textColor: '#000000',
          },
        }
      );
      expect(response).toBeDefined();
    });

    it('Invalid Color Code', async () => {
      await expect(
        testClient.players.update(
          testPlayerIDForUpdateAndDeleteAndGet as string,
          {
            theme: {
              textColor: 'invalid-color',
            },
          }
        )
      ).rejects.toThrow(W3StreamError);
    });

    it('Invalid ID', async () => {
      await expect(
        testClient.players.update('invalid-id', {
          name: 'Updated Player Theme',
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.players.update(newId, {
          name: 'Updated Player Theme',
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('list', () => {
    it('List All', async () => {
      const response = await testClient.players.list({});
      expect(response).toBeDefined();
    });

    it('With Search and Pagination', async () => {
      const response = await testClient.players.list({
        search: 'test',
        limit: 10,
        offset: 0,
        sortBy: 'created_at',
        orderBy: 'desc',
      });
      expect(response).toBeDefined();
    });

    it('Invalid Offset', async () => {
      await expect(testClient.players.list({ offset: -1 })).rejects.toThrow(
        W3StreamError
      );
    });

    it('Invalid Limit', async () => {
      await expect(testClient.players.list({ limit: 1001 })).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('deleteLogo', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.players.deleteLogo(
          testPlayerIDForUpdateAndDeleteAndGet as string
        )
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Delete Logo', async () => {
      const response = await testClient.players.deleteLogo(
        testPlayerIDForUpdateAndDeleteAndGet as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(testClient.players.deleteLogo('invalid-id')).rejects.toThrow(
        W3StreamError
      );
    });

    it('Empty ID', async () => {
      await expect(testClient.players.deleteLogo('')).rejects.toThrow(
        W3StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.players.deleteLogo(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });

  describe('removePlayer', () => {
    it('Remove other', async () => {
      await expect(
        anonymousTestClient.players.removePlayer({
          playerThemeId: testPlayerIDForUpdateAndDeleteAndGet as string,
          videoId: testVideoForPlayer,
        })
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Remove', async () => {
      const response = await testClient.players.removePlayer({
        playerThemeId: testPlayerIDForUpdateAndDeleteAndGet as string,
        videoId: testVideoForPlayer,
      });
      expect(response).toBeDefined();
    });

    it('Invalid Player ID', async () => {
      await expect(
        testClient.players.removePlayer({
          playerThemeId: 'invalid-id',
          videoId: testVideoForPlayer,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.players.removePlayer({
          playerThemeId: testPlayerIDForUpdateAndDeleteAndGet,
        })
      ).rejects.toThrow(W3StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.players.removePlayer({
          playerThemeId: newId,
          videoId: newId,
        })
      ).rejects.toThrow(W3StreamError);
    });
  });

  describe('delete', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.players.delete(
          testPlayerIDForUpdateAndDeleteAndGet as string
        )
      ).rejects.toThrow(W3StreamError);
    });
    it('Valid Delete', async () => {
      const response = await testClient.players.delete(
        testPlayerIDForUpdateAndDeleteAndGet as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(testClient.players.delete('invalid-id')).rejects.toThrow(
        W3StreamError
      );
    });

    it('Empty ID', async () => {
      await expect(testClient.players.delete('')).rejects.toThrow(
        W3StreamError
      );
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.players.delete(newId)).rejects.toThrow(
        W3StreamError
      );
    });
  });
});
