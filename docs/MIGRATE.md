# Migrate from [@w3stream/nodejs-sdk](https://github.com/w3stream/nodejs-sdk)

Listing methods are now called `list` instead of `search`.
They don't fetch all pages by default, this is now left to the user.
This also means the return value has changed. Instead of returning the array of data,
it now returns the full response body:

```json
{
  "data": [],
  "pagination": {}
}
```

> You must access the `data` property on the response, to retrieve the array of object.

- Player theme API is now called `playerThemes` instead of `players`.
- Live stream API is now called `liveStreams` instead of `lives`.

## Videos

### Search videos with paginated results

**Before:**

```js
await client.videos.search({ currentPage: 1, pageSize: 50 });
```

**After:**

```ts
await client.videos.list({ currentPage: 1, pageSize: 50 });
```

### Upload a video thumbnail

**Before:**

```js
await client.videos.uploadThumbnail('test/data/test.jpg', videoId);
```

**After:**

```ts
await client.videos.uploadThumbnail(videoId, 'test/data/test.jpg');
```

> _The identifier is now always the first parameter where possible._

### Pick a thumbnail from the given time code

**Before:**

```js
await client.videos.updateThumbnailWithTimecode(videoId, '00:15:22.05');
```

**After:**

```ts
await client.videos.pickThumbnail(videoId, { timecode: '00:15:22.05' });
```

> _`POST` value is now always an object._

### Upload video caption

**Before:**

```js
await client.captions.upload('test/data/en.vtt', { videoId, language: 'en' });
```

**After:**

```ts
await client.captions.upload(videoId, 'en', 'test/data/en.vtt');
```

### Update the default caption language

**Before:**

```js
await client.captions.updateDefault(videoId, 'en', true);
```

**After:**

```ts
await client.captions.update(videoId, 'en', { _default: true });
```

### Upload video chapter

**Before:**

```js
await client.chapters.upload('test/data/en.vtt', { videoId, language: 'en' });
```

**After:**

```ts
await client.chapters.upload(videoId, 'en', 'test/data/en.vtt');
```

## Player theme

The following properties are deprecated and can't be used in the payload anymore :

```json
{
  "shapeMargin": 10,
  "shapeRadius": 3,
  "shapeAspect": "flat",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "linkActive": "rgba(255, 0, 0, .75)"
}
```

> But they are still available in the API response for now.

### Create player theme with default values

**Before:**

```js
await client.players.create();
```

**After:**

```ts
await client.playerThemes.create();
```

### Get a player theme

**Before:**

```js
await client.players.get(playerId);
```

**After:**

```ts
await client.playerThemes.get(playerThemeId);
```

### Search a player with paginate results

**Before:**

```js
await client.players.search({ currentPage: 1, pageSize: 50 });
```

**After:**

```ts
await client.playerThemes.list({ currentPage: 1, pageSize: 50 });
```

## Player themes

### Update

**Before:**

```js
client.players.update(playerId, properties);
```

**After:**

```ts
client.playerThemes.update(playerId, properties);
```

### Upload a logo

**Before:**

```js
client.players.uploadLogo(
  'test/data/test.jpg',
  playerId,
  'https://api-w3stream.attoaioz.cyou',
);
```

**After:**

```ts
client.playerThemes.uploadLogo(
  playerId,
  'test/data/test.jpg',
  'https://api-w3stream.attoaioz.cyou',
);
```

## Live streams

### Create a live

**Before:**

```js
client.lives.create(name);
```

**After:**

```ts
client.liveStreams.create({ name });
```

### Update live thumbnail

**Before:**

```js
await client.lives.uploadThumbnail('test/data/test.jpg', liveStreamId);
```

**After:**

```ts
client.liveStreams.uploadThumbnail(liveStreamId, 'test/data/test.jpg');
```

### Delete live resource

**Before:**

```js
await client.lives.delete(liveStreamId);
```

**After:**

```ts
client.liveStreams.delete(liveStreamId);
```

### Create a private live

**Before:**

```js
await client.lives.create('This is a private live', { public: false });
```

**After:**

```ts
await client.liveStreams.create({
  name: 'This is a private live',
  _public: false,
});
```

## Tokens

### Generate a token for delegated upload

```js
await client.tokens.generate();
```

**After:**

```ts
await client.uploadTokens.createToken();
```
