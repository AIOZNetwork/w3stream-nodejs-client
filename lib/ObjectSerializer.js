"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
/**
 * @w3stream/nodejs-client
 * W3STREAM Service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddPlayerThemesToVideoRequest_1 = __importDefault(require("./model/AddPlayerThemesToVideoRequest"));
const ApiKey_1 = __importDefault(require("./model/ApiKey"));
const Asset_1 = __importDefault(require("./model/Asset"));
const Controls_1 = __importDefault(require("./model/Controls"));
const CreateApiKeyData_1 = __importDefault(require("./model/CreateApiKeyData"));
const CreateApiKeyRequest_1 = __importDefault(require("./model/CreateApiKeyRequest"));
const CreateApiKeyResponse_1 = __importDefault(require("./model/CreateApiKeyResponse"));
const CreateLiveStreamKeyRequest_1 = __importDefault(require("./model/CreateLiveStreamKeyRequest"));
const CreateLiveStreamKeyResponse_1 = __importDefault(require("./model/CreateLiveStreamKeyResponse"));
const CreatePlayerThemeRequest_1 = __importDefault(require("./model/CreatePlayerThemeRequest"));
const CreatePlayerThemesData_1 = __importDefault(require("./model/CreatePlayerThemesData"));
const CreatePlayerThemesResponse_1 = __importDefault(require("./model/CreatePlayerThemesResponse"));
const CreateStreamingRequest_1 = __importDefault(require("./model/CreateStreamingRequest"));
const CreateStreamingResponse_1 = __importDefault(require("./model/CreateStreamingResponse"));
const CreateVideoCaptionData_1 = __importDefault(require("./model/CreateVideoCaptionData"));
const CreateVideoCaptionResponse_1 = __importDefault(require("./model/CreateVideoCaptionResponse"));
const CreateVideoChapterData_1 = __importDefault(require("./model/CreateVideoChapterData"));
const CreateVideoChapterResponse_1 = __importDefault(require("./model/CreateVideoChapterResponse"));
const CreateVideoRequest_1 = __importDefault(require("./model/CreateVideoRequest"));
const CreateVideoResponse_1 = __importDefault(require("./model/CreateVideoResponse"));
const CreateWatermarkData_1 = __importDefault(require("./model/CreateWatermarkData"));
const CreateWatermarkResponse_1 = __importDefault(require("./model/CreateWatermarkResponse"));
const CreateWebhookData_1 = __importDefault(require("./model/CreateWebhookData"));
const CreateWebhookRequest_1 = __importDefault(require("./model/CreateWebhookRequest"));
const CreateWebhookResponse_1 = __importDefault(require("./model/CreateWebhookResponse"));
const GetAllWatermarkData_1 = __importDefault(require("./model/GetAllWatermarkData"));
const GetAllWatermarkResponse_1 = __importDefault(require("./model/GetAllWatermarkResponse"));
const GetApiKeysData_1 = __importDefault(require("./model/GetApiKeysData"));
const GetApiKeysResponse_1 = __importDefault(require("./model/GetApiKeysResponse"));
const GetLiveStreamKeyData_1 = __importDefault(require("./model/GetLiveStreamKeyData"));
const GetLiveStreamKeyResponse_1 = __importDefault(require("./model/GetLiveStreamKeyResponse"));
const GetLiveStreamKeysListData_1 = __importDefault(require("./model/GetLiveStreamKeysListData"));
const GetLiveStreamKeysListResponse_1 = __importDefault(require("./model/GetLiveStreamKeysListResponse"));
const GetLiveStreamVideoPublicResponse_1 = __importDefault(require("./model/GetLiveStreamVideoPublicResponse"));
const GetLiveStreamVideoResponse_1 = __importDefault(require("./model/GetLiveStreamVideoResponse"));
const GetLiveStreamVideosRequest_1 = __importDefault(require("./model/GetLiveStreamVideosRequest"));
const GetLiveStreamVideosResponse_1 = __importDefault(require("./model/GetLiveStreamVideosResponse"));
const GetPlayerThemeByIdData_1 = __importDefault(require("./model/GetPlayerThemeByIdData"));
const GetPlayerThemeByIdResponse_1 = __importDefault(require("./model/GetPlayerThemeByIdResponse"));
const GetPlayerThemeData_1 = __importDefault(require("./model/GetPlayerThemeData"));
const GetPlayerThemeResponse_1 = __importDefault(require("./model/GetPlayerThemeResponse"));
const GetStreamingResponse_1 = __importDefault(require("./model/GetStreamingResponse"));
const GetStreamingsResponse_1 = __importDefault(require("./model/GetStreamingsResponse"));
const GetTranscodeCostData_1 = __importDefault(require("./model/GetTranscodeCostData"));
const GetTranscodeCostResponse_1 = __importDefault(require("./model/GetTranscodeCostResponse"));
const GetUserWebhookData_1 = __importDefault(require("./model/GetUserWebhookData"));
const GetUserWebhookResponse_1 = __importDefault(require("./model/GetUserWebhookResponse"));
const GetVideoCaptionsData_1 = __importDefault(require("./model/GetVideoCaptionsData"));
const GetVideoCaptionsResponse_1 = __importDefault(require("./model/GetVideoCaptionsResponse"));
const GetVideoChaptersData_1 = __importDefault(require("./model/GetVideoChaptersData"));
const GetVideoChaptersResponse_1 = __importDefault(require("./model/GetVideoChaptersResponse"));
const GetVideoDetailResponse_1 = __importDefault(require("./model/GetVideoDetailResponse"));
const GetVideoListData_1 = __importDefault(require("./model/GetVideoListData"));
const GetVideoListRequest_1 = __importDefault(require("./model/GetVideoListRequest"));
const GetVideoListResponse_1 = __importDefault(require("./model/GetVideoListResponse"));
const GetWebhooksListData_1 = __importDefault(require("./model/GetWebhooksListData"));
const GetWebhooksListResponse_1 = __importDefault(require("./model/GetWebhooksListResponse"));
const LiveStreamAssets_1 = __importDefault(require("./model/LiveStreamAssets"));
const LiveStreamKeyData_1 = __importDefault(require("./model/LiveStreamKeyData"));
const LiveStreamVideoData_1 = __importDefault(require("./model/LiveStreamVideoData"));
const LiveStreamVideoResponse_1 = __importDefault(require("./model/LiveStreamVideoResponse"));
const LiveStreamVideosResponse_1 = __importDefault(require("./model/LiveStreamVideosResponse"));
const Metadata_1 = __importDefault(require("./model/Metadata"));
const PlayerTheme_1 = __importDefault(require("./model/PlayerTheme"));
const QualityObject_1 = __importDefault(require("./model/QualityObject"));
const RemovePlayerThemesFromVideoRequest_1 = __importDefault(require("./model/RemovePlayerThemesFromVideoRequest"));
const RenameAPIKeyRequest_1 = __importDefault(require("./model/RenameAPIKeyRequest"));
const ResponseError_1 = __importDefault(require("./model/ResponseError"));
const ResponseSuccess_1 = __importDefault(require("./model/ResponseSuccess"));
const SetDefaultCaptionRequest_1 = __importDefault(require("./model/SetDefaultCaptionRequest"));
const Theme_1 = __importDefault(require("./model/Theme"));
const UpdateLiveStreamKeyData_1 = __importDefault(require("./model/UpdateLiveStreamKeyData"));
const UpdateLiveStreamKeyRequest_1 = __importDefault(require("./model/UpdateLiveStreamKeyRequest"));
const UpdateLiveStreamKeyResponse_1 = __importDefault(require("./model/UpdateLiveStreamKeyResponse"));
const UpdateLiveStreamVideoRequest_1 = __importDefault(require("./model/UpdateLiveStreamVideoRequest"));
const UpdatePlayerThemeRequest_1 = __importDefault(require("./model/UpdatePlayerThemeRequest"));
const UpdatePlayerThemeResponse_1 = __importDefault(require("./model/UpdatePlayerThemeResponse"));
const UpdateVideoInfoRequest_1 = __importDefault(require("./model/UpdateVideoInfoRequest"));
const UpdateWebhookRequest_1 = __importDefault(require("./model/UpdateWebhookRequest"));
const UploadLogoByIdResponse_1 = __importDefault(require("./model/UploadLogoByIdResponse"));
const VideoAssets_1 = __importDefault(require("./model/VideoAssets"));
const VideoCaption_1 = __importDefault(require("./model/VideoCaption"));
const VideoChapter_1 = __importDefault(require("./model/VideoChapter"));
const VideoObject_1 = __importDefault(require("./model/VideoObject"));
const VideoWatermark_1 = __importDefault(require("./model/VideoWatermark"));
const Watermark_1 = __importDefault(require("./model/Watermark"));
const Webhook_1 = __importDefault(require("./model/Webhook"));
/* tslint:disable:no-unused-variable */
const primitives = [
    'string',
    'boolean',
    'double',
    'integer',
    'long',
    'float',
    'number',
    'any',
];
const supportedMediaTypes = {
    'application/json': Infinity,
    'application/octet-stream': 0,
};
const enumsMap = new Set([]);
const typeMap = {
    AddPlayerThemesToVideoRequest: AddPlayerThemesToVideoRequest_1.default,
    ApiKey: ApiKey_1.default,
    Asset: Asset_1.default,
    Controls: Controls_1.default,
    CreateApiKeyData: CreateApiKeyData_1.default,
    CreateApiKeyRequest: CreateApiKeyRequest_1.default,
    CreateApiKeyResponse: CreateApiKeyResponse_1.default,
    CreateLiveStreamKeyRequest: CreateLiveStreamKeyRequest_1.default,
    CreateLiveStreamKeyResponse: CreateLiveStreamKeyResponse_1.default,
    CreatePlayerThemeRequest: CreatePlayerThemeRequest_1.default,
    CreatePlayerThemesData: CreatePlayerThemesData_1.default,
    CreatePlayerThemesResponse: CreatePlayerThemesResponse_1.default,
    CreateStreamingRequest: CreateStreamingRequest_1.default,
    CreateStreamingResponse: CreateStreamingResponse_1.default,
    CreateVideoCaptionData: CreateVideoCaptionData_1.default,
    CreateVideoCaptionResponse: CreateVideoCaptionResponse_1.default,
    CreateVideoChapterData: CreateVideoChapterData_1.default,
    CreateVideoChapterResponse: CreateVideoChapterResponse_1.default,
    CreateVideoRequest: CreateVideoRequest_1.default,
    CreateVideoResponse: CreateVideoResponse_1.default,
    CreateWatermarkData: CreateWatermarkData_1.default,
    CreateWatermarkResponse: CreateWatermarkResponse_1.default,
    CreateWebhookData: CreateWebhookData_1.default,
    CreateWebhookRequest: CreateWebhookRequest_1.default,
    CreateWebhookResponse: CreateWebhookResponse_1.default,
    GetAllWatermarkData: GetAllWatermarkData_1.default,
    GetAllWatermarkResponse: GetAllWatermarkResponse_1.default,
    GetApiKeysData: GetApiKeysData_1.default,
    GetApiKeysResponse: GetApiKeysResponse_1.default,
    GetLiveStreamKeyData: GetLiveStreamKeyData_1.default,
    GetLiveStreamKeyResponse: GetLiveStreamKeyResponse_1.default,
    GetLiveStreamKeysListData: GetLiveStreamKeysListData_1.default,
    GetLiveStreamKeysListResponse: GetLiveStreamKeysListResponse_1.default,
    GetLiveStreamVideoPublicResponse: GetLiveStreamVideoPublicResponse_1.default,
    GetLiveStreamVideoResponse: GetLiveStreamVideoResponse_1.default,
    GetLiveStreamVideosRequest: GetLiveStreamVideosRequest_1.default,
    GetLiveStreamVideosResponse: GetLiveStreamVideosResponse_1.default,
    GetPlayerThemeByIdData: GetPlayerThemeByIdData_1.default,
    GetPlayerThemeByIdResponse: GetPlayerThemeByIdResponse_1.default,
    GetPlayerThemeData: GetPlayerThemeData_1.default,
    GetPlayerThemeResponse: GetPlayerThemeResponse_1.default,
    GetStreamingResponse: GetStreamingResponse_1.default,
    GetStreamingsResponse: GetStreamingsResponse_1.default,
    GetTranscodeCostData: GetTranscodeCostData_1.default,
    GetTranscodeCostResponse: GetTranscodeCostResponse_1.default,
    GetUserWebhookData: GetUserWebhookData_1.default,
    GetUserWebhookResponse: GetUserWebhookResponse_1.default,
    GetVideoCaptionsData: GetVideoCaptionsData_1.default,
    GetVideoCaptionsResponse: GetVideoCaptionsResponse_1.default,
    GetVideoChaptersData: GetVideoChaptersData_1.default,
    GetVideoChaptersResponse: GetVideoChaptersResponse_1.default,
    GetVideoDetailResponse: GetVideoDetailResponse_1.default,
    GetVideoListData: GetVideoListData_1.default,
    GetVideoListRequest: GetVideoListRequest_1.default,
    GetVideoListResponse: GetVideoListResponse_1.default,
    GetWebhooksListData: GetWebhooksListData_1.default,
    GetWebhooksListResponse: GetWebhooksListResponse_1.default,
    LiveStreamAssets: LiveStreamAssets_1.default,
    LiveStreamKeyData: LiveStreamKeyData_1.default,
    LiveStreamVideoData: LiveStreamVideoData_1.default,
    LiveStreamVideoResponse: LiveStreamVideoResponse_1.default,
    LiveStreamVideosResponse: LiveStreamVideosResponse_1.default,
    Metadata: Metadata_1.default,
    PlayerTheme: PlayerTheme_1.default,
    QualityObject: QualityObject_1.default,
    RemovePlayerThemesFromVideoRequest: RemovePlayerThemesFromVideoRequest_1.default,
    RenameAPIKeyRequest: RenameAPIKeyRequest_1.default,
    ResponseError: ResponseError_1.default,
    ResponseSuccess: ResponseSuccess_1.default,
    SetDefaultCaptionRequest: SetDefaultCaptionRequest_1.default,
    Theme: Theme_1.default,
    UpdateLiveStreamKeyData: UpdateLiveStreamKeyData_1.default,
    UpdateLiveStreamKeyRequest: UpdateLiveStreamKeyRequest_1.default,
    UpdateLiveStreamKeyResponse: UpdateLiveStreamKeyResponse_1.default,
    UpdateLiveStreamVideoRequest: UpdateLiveStreamVideoRequest_1.default,
    UpdatePlayerThemeRequest: UpdatePlayerThemeRequest_1.default,
    UpdatePlayerThemeResponse: UpdatePlayerThemeResponse_1.default,
    UpdateVideoInfoRequest: UpdateVideoInfoRequest_1.default,
    UpdateWebhookRequest: UpdateWebhookRequest_1.default,
    UploadLogoByIdResponse: UploadLogoByIdResponse_1.default,
    VideoAssets: VideoAssets_1.default,
    VideoCaption: VideoCaption_1.default,
    VideoChapter: VideoChapter_1.default,
    VideoObject: VideoObject_1.default,
    VideoWatermark: VideoWatermark_1.default,
    Watermark: Watermark_1.default,
    Webhook: Webhook_1.default,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        // Check the discriminator
        if (typeMap[expectedType]) {
            const discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty && data[discriminatorProperty]) {
                const discriminatorType = data[discriminatorProperty];
                if (typeMap[discriminatorType]) {
                    return discriminatorType; // use the type given in the discriminator
                }
            }
        }
        return expectedType;
    }
    static serialize(data, type, format, defaultValue) {
        if (data == undefined) {
            if (typeof defaultValue === 'undefined') {
                return data;
            }
            data = defaultValue;
        }
        if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            if (format == 'date') {
                let month = data.getMonth() + 1;
                month = month < 10 ? '0' + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? '0' + day.toString() : day.toString();
                return data.getFullYear() + '-' + month + '-' + day;
            }
            else {
                return data.toISOString().split('.')[0] + 'Z';
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            const instance = {};
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format, attributeType.defaultValue);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            const transformedData = [];
            for (const index in data) {
                const date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === 'Date') {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                // is Enum
                return data;
            }
            if (!typeMap[type]) {
                // dont know the type
                return data;
            }
            const instance = new typeMap[type]();
            const attributeTypes = typeMap[type].getAttributeTypeMap();
            for (const index in attributeTypes) {
                const attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(';')[0].trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return 'application/json';
        }
        const normalMediaTypes = mediaTypes
            .map(this.normalizeMediaType)
            .filter((mt) => mt);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error('None of the given media types are supported: ' + mediaTypes.join(', '));
        }
        return selectedMediaType;
    }
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data, mediaType) {
        if (mediaType === 'application/json') {
            return JSON.stringify(data);
        }
        // HTTP DELETE response.
        if (data === '') {
            return data;
        }
        throw new Error('The mediaType ' +
            mediaType +
            ' is not supported by ObjectSerializer.stringify.');
    }
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            // HTTP DELETE response.
            if (rawData === '' || rawData === '""') {
                return rawData;
            }
            throw new Error('Cannot parse content. No Content-Type defined.');
        }
        if (mediaType === 'application/json' ||
            mediaType.indexOf('application/vnd.w3stream+json;version=') === 0) {
            return JSON.parse(rawData);
        }
        throw new Error('The mediaType ' +
            mediaType +
            ' is not supported by ObjectSerializer.parse.');
    }
}
exports.default = ObjectSerializer;
