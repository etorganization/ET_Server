type Long = protobuf.Long;

/** Namespace ETHotfix. */
declare namespace ETHotfix {

    /** Properties of a C2R_Login. */
    interface IC2R_Login {

        /** C2R_Login RpcId */
        RpcId?: (number|null);

        /** C2R_Login Account */
        Account?: (string|null);

        /** C2R_Login Password */
        Password?: (string|null);
    }

    /** Represents a C2R_Login. */
    class C2R_Login implements IC2R_Login {

        /**
         * Constructs a new C2R_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IC2R_Login);

        /** C2R_Login RpcId. */
        public RpcId: number;

        /** C2R_Login Account. */
        public Account: string;

        /** C2R_Login Password. */
        public Password: string;

        /**
         * Creates a new C2R_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Login instance
         */
        public static create(properties?: ETHotfix.IC2R_Login): ETHotfix.C2R_Login;

        /**
         * Encodes the specified C2R_Login message. Does not implicitly {@link ETHotfix.C2R_Login.verify|verify} messages.
         * @param message C2R_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IC2R_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2R_Login message, length delimited. Does not implicitly {@link ETHotfix.C2R_Login.verify|verify} messages.
         * @param message C2R_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IC2R_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2R_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.C2R_Login;

        /**
         * Decodes a C2R_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2R_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.C2R_Login;

        /**
         * Verifies a C2R_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a R2C_Login. */
    interface IR2C_Login {

        /** R2C_Login RpcId */
        RpcId?: (number|null);

        /** R2C_Login Error */
        Error?: (number|null);

        /** R2C_Login Message */
        Message?: (string|null);

        /** R2C_Login Address */
        Address?: (string|null);

        /** R2C_Login Key */
        Key?: (number|Long|null);
    }

    /** Represents a R2C_Login. */
    class R2C_Login implements IR2C_Login {

        /**
         * Constructs a new R2C_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IR2C_Login);

        /** R2C_Login RpcId. */
        public RpcId: number;

        /** R2C_Login Error. */
        public Error: number;

        /** R2C_Login Message. */
        public Message: string;

        /** R2C_Login Address. */
        public Address: string;

        /** R2C_Login Key. */
        public Key: (number|Long);

        /**
         * Creates a new R2C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Login instance
         */
        public static create(properties?: ETHotfix.IR2C_Login): ETHotfix.R2C_Login;

        /**
         * Encodes the specified R2C_Login message. Does not implicitly {@link ETHotfix.R2C_Login.verify|verify} messages.
         * @param message R2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IR2C_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified R2C_Login message, length delimited. Does not implicitly {@link ETHotfix.R2C_Login.verify|verify} messages.
         * @param message R2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IR2C_Login, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a R2C_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.R2C_Login;

        /**
         * Decodes a R2C_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns R2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.R2C_Login;

        /**
         * Verifies a R2C_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2G_LoginGate. */
    interface IC2G_LoginGate {

        /** C2G_LoginGate RpcId */
        RpcId?: (number|null);

        /** C2G_LoginGate Key */
        Key?: (number|Long|null);
    }

    /** Represents a C2G_LoginGate. */
    class C2G_LoginGate implements IC2G_LoginGate {

        /**
         * Constructs a new C2G_LoginGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IC2G_LoginGate);

        /** C2G_LoginGate RpcId. */
        public RpcId: number;

        /** C2G_LoginGate Key. */
        public Key: (number|Long);

        /**
         * Creates a new C2G_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_LoginGate instance
         */
        public static create(properties?: ETHotfix.IC2G_LoginGate): ETHotfix.C2G_LoginGate;

        /**
         * Encodes the specified C2G_LoginGate message. Does not implicitly {@link ETHotfix.C2G_LoginGate.verify|verify} messages.
         * @param message C2G_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IC2G_LoginGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2G_LoginGate message, length delimited. Does not implicitly {@link ETHotfix.C2G_LoginGate.verify|verify} messages.
         * @param message C2G_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IC2G_LoginGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.C2G_LoginGate;

        /**
         * Decodes a C2G_LoginGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.C2G_LoginGate;

        /**
         * Verifies a C2G_LoginGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a G2C_LoginGate. */
    interface IG2C_LoginGate {

        /** G2C_LoginGate RpcId */
        RpcId?: (number|null);

        /** G2C_LoginGate Error */
        Error?: (number|null);

        /** G2C_LoginGate Message */
        Message?: (string|null);

        /** G2C_LoginGate PlayerId */
        PlayerId?: (number|Long|null);
    }

    /** Represents a G2C_LoginGate. */
    class G2C_LoginGate implements IG2C_LoginGate {

        /**
         * Constructs a new G2C_LoginGate.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IG2C_LoginGate);

        /** G2C_LoginGate RpcId. */
        public RpcId: number;

        /** G2C_LoginGate Error. */
        public Error: number;

        /** G2C_LoginGate Message. */
        public Message: string;

        /** G2C_LoginGate PlayerId. */
        public PlayerId: (number|Long);

        /**
         * Creates a new G2C_LoginGate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_LoginGate instance
         */
        public static create(properties?: ETHotfix.IG2C_LoginGate): ETHotfix.G2C_LoginGate;

        /**
         * Encodes the specified G2C_LoginGate message. Does not implicitly {@link ETHotfix.G2C_LoginGate.verify|verify} messages.
         * @param message G2C_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IG2C_LoginGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G2C_LoginGate message, length delimited. Does not implicitly {@link ETHotfix.G2C_LoginGate.verify|verify} messages.
         * @param message G2C_LoginGate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IG2C_LoginGate, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.G2C_LoginGate;

        /**
         * Decodes a G2C_LoginGate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_LoginGate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.G2C_LoginGate;

        /**
         * Verifies a G2C_LoginGate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a G2C_TestHotfixMessage. */
    interface IG2C_TestHotfixMessage {

        /** G2C_TestHotfixMessage Info */
        Info?: (string|null);
    }

    /** Represents a G2C_TestHotfixMessage. */
    class G2C_TestHotfixMessage implements IG2C_TestHotfixMessage {

        /**
         * Constructs a new G2C_TestHotfixMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IG2C_TestHotfixMessage);

        /** G2C_TestHotfixMessage Info. */
        public Info: string;

        /**
         * Creates a new G2C_TestHotfixMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_TestHotfixMessage instance
         */
        public static create(properties?: ETHotfix.IG2C_TestHotfixMessage): ETHotfix.G2C_TestHotfixMessage;

        /**
         * Encodes the specified G2C_TestHotfixMessage message. Does not implicitly {@link ETHotfix.G2C_TestHotfixMessage.verify|verify} messages.
         * @param message G2C_TestHotfixMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IG2C_TestHotfixMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G2C_TestHotfixMessage message, length delimited. Does not implicitly {@link ETHotfix.G2C_TestHotfixMessage.verify|verify} messages.
         * @param message G2C_TestHotfixMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IG2C_TestHotfixMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_TestHotfixMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.G2C_TestHotfixMessage;

        /**
         * Decodes a G2C_TestHotfixMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_TestHotfixMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.G2C_TestHotfixMessage;

        /**
         * Verifies a G2C_TestHotfixMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2M_TestActorRequest. */
    interface IC2M_TestActorRequest {

        /** C2M_TestActorRequest RpcId */
        RpcId?: (number|null);

        /** C2M_TestActorRequest ActorId */
        ActorId?: (number|Long|null);

        /** C2M_TestActorRequest Info */
        Info?: (string|null);
    }

    /** Represents a C2M_TestActorRequest. */
    class C2M_TestActorRequest implements IC2M_TestActorRequest {

        /**
         * Constructs a new C2M_TestActorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IC2M_TestActorRequest);

        /** C2M_TestActorRequest RpcId. */
        public RpcId: number;

        /** C2M_TestActorRequest ActorId. */
        public ActorId: (number|Long);

        /** C2M_TestActorRequest Info. */
        public Info: string;

        /**
         * Creates a new C2M_TestActorRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_TestActorRequest instance
         */
        public static create(properties?: ETHotfix.IC2M_TestActorRequest): ETHotfix.C2M_TestActorRequest;

        /**
         * Encodes the specified C2M_TestActorRequest message. Does not implicitly {@link ETHotfix.C2M_TestActorRequest.verify|verify} messages.
         * @param message C2M_TestActorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IC2M_TestActorRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2M_TestActorRequest message, length delimited. Does not implicitly {@link ETHotfix.C2M_TestActorRequest.verify|verify} messages.
         * @param message C2M_TestActorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IC2M_TestActorRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2M_TestActorRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2M_TestActorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.C2M_TestActorRequest;

        /**
         * Decodes a C2M_TestActorRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2M_TestActorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.C2M_TestActorRequest;

        /**
         * Verifies a C2M_TestActorRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a M2C_TestActorResponse. */
    interface IM2C_TestActorResponse {

        /** M2C_TestActorResponse RpcId */
        RpcId?: (number|null);

        /** M2C_TestActorResponse Error */
        Error?: (number|null);

        /** M2C_TestActorResponse Message */
        Message?: (string|null);

        /** M2C_TestActorResponse Info */
        Info?: (string|null);
    }

    /** Represents a M2C_TestActorResponse. */
    class M2C_TestActorResponse implements IM2C_TestActorResponse {

        /**
         * Constructs a new M2C_TestActorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IM2C_TestActorResponse);

        /** M2C_TestActorResponse RpcId. */
        public RpcId: number;

        /** M2C_TestActorResponse Error. */
        public Error: number;

        /** M2C_TestActorResponse Message. */
        public Message: string;

        /** M2C_TestActorResponse Info. */
        public Info: string;

        /**
         * Creates a new M2C_TestActorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_TestActorResponse instance
         */
        public static create(properties?: ETHotfix.IM2C_TestActorResponse): ETHotfix.M2C_TestActorResponse;

        /**
         * Encodes the specified M2C_TestActorResponse message. Does not implicitly {@link ETHotfix.M2C_TestActorResponse.verify|verify} messages.
         * @param message M2C_TestActorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IM2C_TestActorResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified M2C_TestActorResponse message, length delimited. Does not implicitly {@link ETHotfix.M2C_TestActorResponse.verify|verify} messages.
         * @param message M2C_TestActorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IM2C_TestActorResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a M2C_TestActorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns M2C_TestActorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.M2C_TestActorResponse;

        /**
         * Decodes a M2C_TestActorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns M2C_TestActorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.M2C_TestActorResponse;

        /**
         * Verifies a M2C_TestActorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo RpcId */
        RpcId?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IPlayerInfo);

        /** PlayerInfo RpcId. */
        public RpcId: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: ETHotfix.IPlayerInfo): ETHotfix.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link ETHotfix.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link ETHotfix.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2G_PlayerInfo. */
    interface IC2G_PlayerInfo {

        /** C2G_PlayerInfo RpcId */
        RpcId?: (number|null);
    }

    /** Represents a C2G_PlayerInfo. */
    class C2G_PlayerInfo implements IC2G_PlayerInfo {

        /**
         * Constructs a new C2G_PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IC2G_PlayerInfo);

        /** C2G_PlayerInfo RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2G_PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_PlayerInfo instance
         */
        public static create(properties?: ETHotfix.IC2G_PlayerInfo): ETHotfix.C2G_PlayerInfo;

        /**
         * Encodes the specified C2G_PlayerInfo message. Does not implicitly {@link ETHotfix.C2G_PlayerInfo.verify|verify} messages.
         * @param message C2G_PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IC2G_PlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2G_PlayerInfo message, length delimited. Does not implicitly {@link ETHotfix.C2G_PlayerInfo.verify|verify} messages.
         * @param message C2G_PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IC2G_PlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2G_PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.C2G_PlayerInfo;

        /**
         * Decodes a C2G_PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.C2G_PlayerInfo;

        /**
         * Verifies a C2G_PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a G2C_PlayerInfo. */
    interface IG2C_PlayerInfo {

        /** G2C_PlayerInfo RpcId */
        RpcId?: (number|null);

        /** G2C_PlayerInfo Error */
        Error?: (number|null);

        /** G2C_PlayerInfo Message */
        Message?: (string|null);

        /** G2C_PlayerInfo PlayerInfo */
        PlayerInfo?: (ETHotfix.IPlayerInfo|null);

        /** G2C_PlayerInfo PlayerInfos */
        PlayerInfos?: (ETHotfix.IPlayerInfo[]|null);

        /** G2C_PlayerInfo TestRepeatedString */
        TestRepeatedString?: (string[]|null);

        /** G2C_PlayerInfo TestRepeatedInt32 */
        TestRepeatedInt32?: (number[]|null);

        /** G2C_PlayerInfo TestRepeatedInt64 */
        TestRepeatedInt64?: ((number|Long)[]|null);
    }

    /** Represents a G2C_PlayerInfo. */
    class G2C_PlayerInfo implements IG2C_PlayerInfo {

        /**
         * Constructs a new G2C_PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETHotfix.IG2C_PlayerInfo);

        /** G2C_PlayerInfo RpcId. */
        public RpcId: number;

        /** G2C_PlayerInfo Error. */
        public Error: number;

        /** G2C_PlayerInfo Message. */
        public Message: string;

        /** G2C_PlayerInfo PlayerInfo. */
        public PlayerInfo?: (ETHotfix.IPlayerInfo|null);

        /** G2C_PlayerInfo PlayerInfos. */
        public PlayerInfos: ETHotfix.IPlayerInfo[];

        /** G2C_PlayerInfo TestRepeatedString. */
        public TestRepeatedString: string[];

        /** G2C_PlayerInfo TestRepeatedInt32. */
        public TestRepeatedInt32: number[];

        /** G2C_PlayerInfo TestRepeatedInt64. */
        public TestRepeatedInt64: (number|Long)[];

        /**
         * Creates a new G2C_PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_PlayerInfo instance
         */
        public static create(properties?: ETHotfix.IG2C_PlayerInfo): ETHotfix.G2C_PlayerInfo;

        /**
         * Encodes the specified G2C_PlayerInfo message. Does not implicitly {@link ETHotfix.G2C_PlayerInfo.verify|verify} messages.
         * @param message G2C_PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETHotfix.IG2C_PlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G2C_PlayerInfo message, length delimited. Does not implicitly {@link ETHotfix.G2C_PlayerInfo.verify|verify} messages.
         * @param message G2C_PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETHotfix.IG2C_PlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G2C_PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETHotfix.G2C_PlayerInfo;

        /**
         * Decodes a G2C_PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETHotfix.G2C_PlayerInfo;

        /**
         * Verifies a G2C_PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace ETModel. */
declare namespace ETModel {

    /** Properties of an Actor_Test. */
    interface IActor_Test {

        /** Actor_Test RpcId */
        RpcId?: (number|null);

        /** Actor_Test ActorId */
        ActorId?: (number|Long|null);

        /** Actor_Test Info */
        Info?: (string|null);
    }

    /** Represents an Actor_Test. */
    class Actor_Test implements IActor_Test {

        /**
         * Constructs a new Actor_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IActor_Test);

        /** Actor_Test RpcId. */
        public RpcId: number;

        /** Actor_Test ActorId. */
        public ActorId: (number|Long);

        /** Actor_Test Info. */
        public Info: string;

        /**
         * Creates a new Actor_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_Test instance
         */
        public static create(properties?: ETModel.IActor_Test): ETModel.Actor_Test;

        /**
         * Encodes the specified Actor_Test message. Does not implicitly {@link ETModel.Actor_Test.verify|verify} messages.
         * @param message Actor_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IActor_Test, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Actor_Test message, length delimited. Does not implicitly {@link ETModel.Actor_Test.verify|verify} messages.
         * @param message Actor_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IActor_Test, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Actor_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.Actor_Test;

        /**
         * Decodes an Actor_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.Actor_Test;

        /**
         * Verifies an Actor_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2M_TestRequest. */
    interface IC2M_TestRequest {

        /** C2M_TestRequest RpcId */
        RpcId?: (number|null);

        /** C2M_TestRequest ActorId */
        ActorId?: (number|Long|null);

        /** C2M_TestRequest request */
        request?: (string|null);
    }

    /** Represents a C2M_TestRequest. */
    class C2M_TestRequest implements IC2M_TestRequest {

        /**
         * Constructs a new C2M_TestRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IC2M_TestRequest);

        /** C2M_TestRequest RpcId. */
        public RpcId: number;

        /** C2M_TestRequest ActorId. */
        public ActorId: (number|Long);

        /** C2M_TestRequest request. */
        public request: string;

        /**
         * Creates a new C2M_TestRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_TestRequest instance
         */
        public static create(properties?: ETModel.IC2M_TestRequest): ETModel.C2M_TestRequest;

        /**
         * Encodes the specified C2M_TestRequest message. Does not implicitly {@link ETModel.C2M_TestRequest.verify|verify} messages.
         * @param message C2M_TestRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IC2M_TestRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2M_TestRequest message, length delimited. Does not implicitly {@link ETModel.C2M_TestRequest.verify|verify} messages.
         * @param message C2M_TestRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IC2M_TestRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.C2M_TestRequest;

        /**
         * Decodes a C2M_TestRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2M_TestRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.C2M_TestRequest;

        /**
         * Verifies a C2M_TestRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a M2C_TestResponse. */
    interface IM2C_TestResponse {

        /** M2C_TestResponse RpcId */
        RpcId?: (number|null);

        /** M2C_TestResponse Error */
        Error?: (number|null);

        /** M2C_TestResponse Message */
        Message?: (string|null);

        /** M2C_TestResponse response */
        response?: (string|null);
    }

    /** Represents a M2C_TestResponse. */
    class M2C_TestResponse implements IM2C_TestResponse {

        /**
         * Constructs a new M2C_TestResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IM2C_TestResponse);

        /** M2C_TestResponse RpcId. */
        public RpcId: number;

        /** M2C_TestResponse Error. */
        public Error: number;

        /** M2C_TestResponse Message. */
        public Message: string;

        /** M2C_TestResponse response. */
        public response: string;

        /**
         * Creates a new M2C_TestResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_TestResponse instance
         */
        public static create(properties?: ETModel.IM2C_TestResponse): ETModel.M2C_TestResponse;

        /**
         * Encodes the specified M2C_TestResponse message. Does not implicitly {@link ETModel.M2C_TestResponse.verify|verify} messages.
         * @param message M2C_TestResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IM2C_TestResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified M2C_TestResponse message, length delimited. Does not implicitly {@link ETModel.M2C_TestResponse.verify|verify} messages.
         * @param message M2C_TestResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IM2C_TestResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.M2C_TestResponse;

        /**
         * Decodes a M2C_TestResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns M2C_TestResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.M2C_TestResponse;

        /**
         * Verifies a M2C_TestResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Actor_TransferRequest. */
    interface IActor_TransferRequest {

        /** Actor_TransferRequest RpcId */
        RpcId?: (number|null);

        /** Actor_TransferRequest ActorId */
        ActorId?: (number|Long|null);

        /** Actor_TransferRequest MapIndex */
        MapIndex?: (number|null);
    }

    /** Represents an Actor_TransferRequest. */
    class Actor_TransferRequest implements IActor_TransferRequest {

        /**
         * Constructs a new Actor_TransferRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IActor_TransferRequest);

        /** Actor_TransferRequest RpcId. */
        public RpcId: number;

        /** Actor_TransferRequest ActorId. */
        public ActorId: (number|Long);

        /** Actor_TransferRequest MapIndex. */
        public MapIndex: number;

        /**
         * Creates a new Actor_TransferRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_TransferRequest instance
         */
        public static create(properties?: ETModel.IActor_TransferRequest): ETModel.Actor_TransferRequest;

        /**
         * Encodes the specified Actor_TransferRequest message. Does not implicitly {@link ETModel.Actor_TransferRequest.verify|verify} messages.
         * @param message Actor_TransferRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IActor_TransferRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Actor_TransferRequest message, length delimited. Does not implicitly {@link ETModel.Actor_TransferRequest.verify|verify} messages.
         * @param message Actor_TransferRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IActor_TransferRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.Actor_TransferRequest;

        /**
         * Decodes an Actor_TransferRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_TransferRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.Actor_TransferRequest;

        /**
         * Verifies an Actor_TransferRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Actor_TransferResponse. */
    interface IActor_TransferResponse {

        /** Actor_TransferResponse RpcId */
        RpcId?: (number|null);

        /** Actor_TransferResponse Error */
        Error?: (number|null);

        /** Actor_TransferResponse Message */
        Message?: (string|null);
    }

    /** Represents an Actor_TransferResponse. */
    class Actor_TransferResponse implements IActor_TransferResponse {

        /**
         * Constructs a new Actor_TransferResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IActor_TransferResponse);

        /** Actor_TransferResponse RpcId. */
        public RpcId: number;

        /** Actor_TransferResponse Error. */
        public Error: number;

        /** Actor_TransferResponse Message. */
        public Message: string;

        /**
         * Creates a new Actor_TransferResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_TransferResponse instance
         */
        public static create(properties?: ETModel.IActor_TransferResponse): ETModel.Actor_TransferResponse;

        /**
         * Encodes the specified Actor_TransferResponse message. Does not implicitly {@link ETModel.Actor_TransferResponse.verify|verify} messages.
         * @param message Actor_TransferResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IActor_TransferResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Actor_TransferResponse message, length delimited. Does not implicitly {@link ETModel.Actor_TransferResponse.verify|verify} messages.
         * @param message Actor_TransferResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IActor_TransferResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.Actor_TransferResponse;

        /**
         * Decodes an Actor_TransferResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_TransferResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.Actor_TransferResponse;

        /**
         * Verifies an Actor_TransferResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2G_EnterMap. */
    interface IC2G_EnterMap {

        /** C2G_EnterMap RpcId */
        RpcId?: (number|null);
    }

    /** Represents a C2G_EnterMap. */
    class C2G_EnterMap implements IC2G_EnterMap {

        /**
         * Constructs a new C2G_EnterMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IC2G_EnterMap);

        /** C2G_EnterMap RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2G_EnterMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_EnterMap instance
         */
        public static create(properties?: ETModel.IC2G_EnterMap): ETModel.C2G_EnterMap;

        /**
         * Encodes the specified C2G_EnterMap message. Does not implicitly {@link ETModel.C2G_EnterMap.verify|verify} messages.
         * @param message C2G_EnterMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IC2G_EnterMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2G_EnterMap message, length delimited. Does not implicitly {@link ETModel.C2G_EnterMap.verify|verify} messages.
         * @param message C2G_EnterMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IC2G_EnterMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.C2G_EnterMap;

        /**
         * Decodes a C2G_EnterMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.C2G_EnterMap;

        /**
         * Verifies a C2G_EnterMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a G2C_EnterMap. */
    interface IG2C_EnterMap {

        /** G2C_EnterMap RpcId */
        RpcId?: (number|null);

        /** G2C_EnterMap Error */
        Error?: (number|null);

        /** G2C_EnterMap Message */
        Message?: (string|null);

        /** G2C_EnterMap UnitId */
        UnitId?: (number|Long|null);

        /** G2C_EnterMap Units */
        Units?: (ETModel.IUnitInfo[]|null);
    }

    /** Represents a G2C_EnterMap. */
    class G2C_EnterMap implements IG2C_EnterMap {

        /**
         * Constructs a new G2C_EnterMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IG2C_EnterMap);

        /** G2C_EnterMap RpcId. */
        public RpcId: number;

        /** G2C_EnterMap Error. */
        public Error: number;

        /** G2C_EnterMap Message. */
        public Message: string;

        /** G2C_EnterMap UnitId. */
        public UnitId: (number|Long);

        /** G2C_EnterMap Units. */
        public Units: ETModel.IUnitInfo[];

        /**
         * Creates a new G2C_EnterMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_EnterMap instance
         */
        public static create(properties?: ETModel.IG2C_EnterMap): ETModel.G2C_EnterMap;

        /**
         * Encodes the specified G2C_EnterMap message. Does not implicitly {@link ETModel.G2C_EnterMap.verify|verify} messages.
         * @param message G2C_EnterMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IG2C_EnterMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G2C_EnterMap message, length delimited. Does not implicitly {@link ETModel.G2C_EnterMap.verify|verify} messages.
         * @param message G2C_EnterMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IG2C_EnterMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.G2C_EnterMap;

        /**
         * Decodes a G2C_EnterMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_EnterMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.G2C_EnterMap;

        /**
         * Verifies a G2C_EnterMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UnitInfo. */
    interface IUnitInfo {

        /** UnitInfo UnitId */
        UnitId?: (number|Long|null);

        /** UnitInfo X */
        X?: (number|null);

        /** UnitInfo Y */
        Y?: (number|null);

        /** UnitInfo Z */
        Z?: (number|null);
    }

    /** Represents an UnitInfo. */
    class UnitInfo implements IUnitInfo {

        /**
         * Constructs a new UnitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IUnitInfo);

        /** UnitInfo UnitId. */
        public UnitId: (number|Long);

        /** UnitInfo X. */
        public X: number;

        /** UnitInfo Y. */
        public Y: number;

        /** UnitInfo Z. */
        public Z: number;

        /**
         * Creates a new UnitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitInfo instance
         */
        public static create(properties?: ETModel.IUnitInfo): ETModel.UnitInfo;

        /**
         * Encodes the specified UnitInfo message. Does not implicitly {@link ETModel.UnitInfo.verify|verify} messages.
         * @param message UnitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IUnitInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UnitInfo message, length delimited. Does not implicitly {@link ETModel.UnitInfo.verify|verify} messages.
         * @param message UnitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IUnitInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UnitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.UnitInfo;

        /**
         * Decodes an UnitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.UnitInfo;

        /**
         * Verifies an UnitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a M2C_CreateUnits. */
    interface IM2C_CreateUnits {

        /** M2C_CreateUnits RpcId */
        RpcId?: (number|null);

        /** M2C_CreateUnits ActorId */
        ActorId?: (number|Long|null);

        /** M2C_CreateUnits Units */
        Units?: (ETModel.IUnitInfo[]|null);
    }

    /** Represents a M2C_CreateUnits. */
    class M2C_CreateUnits implements IM2C_CreateUnits {

        /**
         * Constructs a new M2C_CreateUnits.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IM2C_CreateUnits);

        /** M2C_CreateUnits RpcId. */
        public RpcId: number;

        /** M2C_CreateUnits ActorId. */
        public ActorId: (number|Long);

        /** M2C_CreateUnits Units. */
        public Units: ETModel.IUnitInfo[];

        /**
         * Creates a new M2C_CreateUnits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_CreateUnits instance
         */
        public static create(properties?: ETModel.IM2C_CreateUnits): ETModel.M2C_CreateUnits;

        /**
         * Encodes the specified M2C_CreateUnits message. Does not implicitly {@link ETModel.M2C_CreateUnits.verify|verify} messages.
         * @param message M2C_CreateUnits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IM2C_CreateUnits, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified M2C_CreateUnits message, length delimited. Does not implicitly {@link ETModel.M2C_CreateUnits.verify|verify} messages.
         * @param message M2C_CreateUnits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IM2C_CreateUnits, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.M2C_CreateUnits;

        /**
         * Decodes a M2C_CreateUnits message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns M2C_CreateUnits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.M2C_CreateUnits;

        /**
         * Verifies a M2C_CreateUnits message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Frame_ClickMap. */
    interface IFrame_ClickMap {

        /** Frame_ClickMap RpcId */
        RpcId?: (number|null);

        /** Frame_ClickMap ActorId */
        ActorId?: (number|Long|null);

        /** Frame_ClickMap Id */
        Id?: (number|Long|null);

        /** Frame_ClickMap X */
        X?: (number|null);

        /** Frame_ClickMap Y */
        Y?: (number|null);

        /** Frame_ClickMap Z */
        Z?: (number|null);
    }

    /** Represents a Frame_ClickMap. */
    class Frame_ClickMap implements IFrame_ClickMap {

        /**
         * Constructs a new Frame_ClickMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IFrame_ClickMap);

        /** Frame_ClickMap RpcId. */
        public RpcId: number;

        /** Frame_ClickMap ActorId. */
        public ActorId: (number|Long);

        /** Frame_ClickMap Id. */
        public Id: (number|Long);

        /** Frame_ClickMap X. */
        public X: number;

        /** Frame_ClickMap Y. */
        public Y: number;

        /** Frame_ClickMap Z. */
        public Z: number;

        /**
         * Creates a new Frame_ClickMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Frame_ClickMap instance
         */
        public static create(properties?: ETModel.IFrame_ClickMap): ETModel.Frame_ClickMap;

        /**
         * Encodes the specified Frame_ClickMap message. Does not implicitly {@link ETModel.Frame_ClickMap.verify|verify} messages.
         * @param message Frame_ClickMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IFrame_ClickMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Frame_ClickMap message, length delimited. Does not implicitly {@link ETModel.Frame_ClickMap.verify|verify} messages.
         * @param message Frame_ClickMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IFrame_ClickMap, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.Frame_ClickMap;

        /**
         * Decodes a Frame_ClickMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Frame_ClickMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.Frame_ClickMap;

        /**
         * Verifies a Frame_ClickMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a M2C_PathfindingResult. */
    interface IM2C_PathfindingResult {

        /** M2C_PathfindingResult ActorId */
        ActorId?: (number|Long|null);

        /** M2C_PathfindingResult Id */
        Id?: (number|Long|null);

        /** M2C_PathfindingResult X */
        X?: (number|null);

        /** M2C_PathfindingResult Y */
        Y?: (number|null);

        /** M2C_PathfindingResult Z */
        Z?: (number|null);

        /** M2C_PathfindingResult Xs */
        Xs?: (number[]|null);

        /** M2C_PathfindingResult Ys */
        Ys?: (number[]|null);

        /** M2C_PathfindingResult Zs */
        Zs?: (number[]|null);
    }

    /** Represents a M2C_PathfindingResult. */
    class M2C_PathfindingResult implements IM2C_PathfindingResult {

        /**
         * Constructs a new M2C_PathfindingResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IM2C_PathfindingResult);

        /** M2C_PathfindingResult ActorId. */
        public ActorId: (number|Long);

        /** M2C_PathfindingResult Id. */
        public Id: (number|Long);

        /** M2C_PathfindingResult X. */
        public X: number;

        /** M2C_PathfindingResult Y. */
        public Y: number;

        /** M2C_PathfindingResult Z. */
        public Z: number;

        /** M2C_PathfindingResult Xs. */
        public Xs: number[];

        /** M2C_PathfindingResult Ys. */
        public Ys: number[];

        /** M2C_PathfindingResult Zs. */
        public Zs: number[];

        /**
         * Creates a new M2C_PathfindingResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_PathfindingResult instance
         */
        public static create(properties?: ETModel.IM2C_PathfindingResult): ETModel.M2C_PathfindingResult;

        /**
         * Encodes the specified M2C_PathfindingResult message. Does not implicitly {@link ETModel.M2C_PathfindingResult.verify|verify} messages.
         * @param message M2C_PathfindingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IM2C_PathfindingResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified M2C_PathfindingResult message, length delimited. Does not implicitly {@link ETModel.M2C_PathfindingResult.verify|verify} messages.
         * @param message M2C_PathfindingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IM2C_PathfindingResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.M2C_PathfindingResult;

        /**
         * Decodes a M2C_PathfindingResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns M2C_PathfindingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.M2C_PathfindingResult;

        /**
         * Verifies a M2C_PathfindingResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2R_Ping. */
    interface IC2R_Ping {

        /** C2R_Ping RpcId */
        RpcId?: (number|null);
    }

    /** Represents a C2R_Ping. */
    class C2R_Ping implements IC2R_Ping {

        /**
         * Constructs a new C2R_Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IC2R_Ping);

        /** C2R_Ping RpcId. */
        public RpcId: number;

        /**
         * Creates a new C2R_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Ping instance
         */
        public static create(properties?: ETModel.IC2R_Ping): ETModel.C2R_Ping;

        /**
         * Encodes the specified C2R_Ping message. Does not implicitly {@link ETModel.C2R_Ping.verify|verify} messages.
         * @param message C2R_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IC2R_Ping, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2R_Ping message, length delimited. Does not implicitly {@link ETModel.C2R_Ping.verify|verify} messages.
         * @param message C2R_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IC2R_Ping, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.C2R_Ping;

        /**
         * Decodes a C2R_Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2R_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.C2R_Ping;

        /**
         * Verifies a C2R_Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a R2C_Ping. */
    interface IR2C_Ping {

        /** R2C_Ping RpcId */
        RpcId?: (number|null);

        /** R2C_Ping Error */
        Error?: (number|null);

        /** R2C_Ping Message */
        Message?: (string|null);
    }

    /** Represents a R2C_Ping. */
    class R2C_Ping implements IR2C_Ping {

        /**
         * Constructs a new R2C_Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IR2C_Ping);

        /** R2C_Ping RpcId. */
        public RpcId: number;

        /** R2C_Ping Error. */
        public Error: number;

        /** R2C_Ping Message. */
        public Message: string;

        /**
         * Creates a new R2C_Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Ping instance
         */
        public static create(properties?: ETModel.IR2C_Ping): ETModel.R2C_Ping;

        /**
         * Encodes the specified R2C_Ping message. Does not implicitly {@link ETModel.R2C_Ping.verify|verify} messages.
         * @param message R2C_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IR2C_Ping, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified R2C_Ping message, length delimited. Does not implicitly {@link ETModel.R2C_Ping.verify|verify} messages.
         * @param message R2C_Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IR2C_Ping, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.R2C_Ping;

        /**
         * Decodes a R2C_Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns R2C_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.R2C_Ping;

        /**
         * Verifies a R2C_Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a G2C_Test. */
    interface IG2C_Test {
    }

    /** Represents a G2C_Test. */
    class G2C_Test implements IG2C_Test {

        /**
         * Constructs a new G2C_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IG2C_Test);

        /**
         * Creates a new G2C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_Test instance
         */
        public static create(properties?: ETModel.IG2C_Test): ETModel.G2C_Test;

        /**
         * Encodes the specified G2C_Test message. Does not implicitly {@link ETModel.G2C_Test.verify|verify} messages.
         * @param message G2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IG2C_Test, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified G2C_Test message, length delimited. Does not implicitly {@link ETModel.G2C_Test.verify|verify} messages.
         * @param message G2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IG2C_Test, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a G2C_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.G2C_Test;

        /**
         * Decodes a G2C_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.G2C_Test;

        /**
         * Verifies a G2C_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a C2M_Reload. */
    interface IC2M_Reload {

        /** C2M_Reload RpcId */
        RpcId?: (number|null);

        /** C2M_Reload Account */
        Account?: (string|null);

        /** C2M_Reload Password */
        Password?: (string|null);
    }

    /** Represents a C2M_Reload. */
    class C2M_Reload implements IC2M_Reload {

        /**
         * Constructs a new C2M_Reload.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IC2M_Reload);

        /** C2M_Reload RpcId. */
        public RpcId: number;

        /** C2M_Reload Account. */
        public Account: string;

        /** C2M_Reload Password. */
        public Password: string;

        /**
         * Creates a new C2M_Reload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2M_Reload instance
         */
        public static create(properties?: ETModel.IC2M_Reload): ETModel.C2M_Reload;

        /**
         * Encodes the specified C2M_Reload message. Does not implicitly {@link ETModel.C2M_Reload.verify|verify} messages.
         * @param message C2M_Reload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IC2M_Reload, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified C2M_Reload message, length delimited. Does not implicitly {@link ETModel.C2M_Reload.verify|verify} messages.
         * @param message C2M_Reload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IC2M_Reload, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.C2M_Reload;

        /**
         * Decodes a C2M_Reload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2M_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.C2M_Reload;

        /**
         * Verifies a C2M_Reload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a M2C_Reload. */
    interface IM2C_Reload {

        /** M2C_Reload RpcId */
        RpcId?: (number|null);

        /** M2C_Reload Error */
        Error?: (number|null);

        /** M2C_Reload Message */
        Message?: (string|null);
    }

    /** Represents a M2C_Reload. */
    class M2C_Reload implements IM2C_Reload {

        /**
         * Constructs a new M2C_Reload.
         * @param [properties] Properties to set
         */
        constructor(properties?: ETModel.IM2C_Reload);

        /** M2C_Reload RpcId. */
        public RpcId: number;

        /** M2C_Reload Error. */
        public Error: number;

        /** M2C_Reload Message. */
        public Message: string;

        /**
         * Creates a new M2C_Reload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns M2C_Reload instance
         */
        public static create(properties?: ETModel.IM2C_Reload): ETModel.M2C_Reload;

        /**
         * Encodes the specified M2C_Reload message. Does not implicitly {@link ETModel.M2C_Reload.verify|verify} messages.
         * @param message M2C_Reload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ETModel.IM2C_Reload, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified M2C_Reload message, length delimited. Does not implicitly {@link ETModel.M2C_Reload.verify|verify} messages.
         * @param message M2C_Reload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ETModel.IM2C_Reload, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ETModel.M2C_Reload;

        /**
         * Decodes a M2C_Reload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns M2C_Reload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ETModel.M2C_Reload;

        /**
         * Verifies a M2C_Reload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
