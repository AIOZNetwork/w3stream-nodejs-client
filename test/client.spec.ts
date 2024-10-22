import W3StreamClient from '../src';
import ApiKeyApi from '../src/api/ApiKeyApi';
import LiveStreamApi from '../src/api/LiveStreamApi';
import PlayersApi from '../src/api/PlayersApi';
import VideoApi from '../src/api/VideoApi';
import VideoChapterApi from '../src/api/VideoChapterApi';
import WatermarkApi from '../src/api/WatermarkApi';
import WebhookApi from '../src/api/WebhookApi';

describe('W3StreamClient', () => {
  it('should use the ApiKeyApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.apiKey).toBeInstanceOf(ApiKeyApi);
  });
  it('should use the LiveStreamApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.liveStream).toBeInstanceOf(LiveStreamApi);
  });
  it('should use the PlayersApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.players).toBeInstanceOf(PlayersApi);
  });
  it('should use the VideoApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.video).toBeInstanceOf(VideoApi);
  });
  it('should use the VideoChapterApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.videoChapter).toBeInstanceOf(VideoChapterApi);
  });
  it('should use the WatermarkApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.watermark).toBeInstanceOf(WatermarkApi);
  });
  it('should use the WebhookApi class', () => {
    const client = new W3StreamClient({ apiKey: 'test' });
    expect(client.webhook).toBeInstanceOf(WebhookApi);
  });

  it('should validate the application name value', () => {
    expect(
      () => new W3StreamClient({ applicationName: 'applicationname' })
    ).toThrow('application version is mandatory when application name is set.');

    expect(
      () =>
        new W3StreamClient({
          applicationName: 'application name',
          applicationVersion: '1.0.0',
        })
    ).toThrow(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new W3StreamClient({
          applicationName:
            '012345678901234567890123456789012345678901234567891',
          applicationVersion: '1.0.0',
        })
    ).toThrow(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new W3StreamClient({
          applicationName: 'my-great-application1',
          applicationVersion: '0.1.1',
        })
    ).not.toThrow();

    expect(() => new W3StreamClient({ applicationVersion: '1.0.0' })).toThrow(
      'application name is mandatory when application version is set.'
    );

    expect(
      () =>
        new W3StreamClient({
          applicationName: 'application',
          applicationVersion: '1.1234.0',
        })
    ).toThrow(
      'Invalid application version value. The version should match the xxx[.yyy][.zzz] pattern.'
    );

    expect(
      () =>
        new W3StreamClient({
          applicationName: 'application',
          applicationVersion: '1.123.0',
        })
    ).not.toThrow();
  });
});
