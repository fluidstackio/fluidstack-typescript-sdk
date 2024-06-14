/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as FluidStackApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace SshKeys {
    interface Options {
        environment?: core.Supplier<environments.FluidStackApiEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class SshKeys {
    constructor(protected readonly _options: SshKeys.Options = {}) {}

    /**
     * Fetch a list of SSH keys associated with the authenticated user.
     *
     * @param {SshKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.sshKeys.list()
     */
    public async list(requestOptions?: SshKeys.RequestOptions): Promise<FluidStackApi.SshKeyResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                "ssh_keys"
            ),
            method: "GET",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.sshKeys.list.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new FluidStackApi.UnauthorizedError(
                        await serializers.Message.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new FluidStackApi.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FluidStackApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FluidStackApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FluidStackApiTimeoutError();
            case "unknown":
                throw new errors.FluidStackApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new SSH key for the authenticated user.
     *
     * You must provide a unique name for the SSH key, along with a public key. The public key you provide will be duplicated on your FluidStack account for use as as an SSH key.
     *
     * <Note>Supported public key formats: ssh-rsa, ssh-dss (DSA), ssh-ed25519, ecdsa keys with NIST curves</Note>
     *
     * @param {FluidStackApi.CreateSshKeyRequest} request
     * @param {SshKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.sshKeys.create({
     *         name: "mykey",
     *         publicKey: "<public_key>"
     *     })
     */
    public async create(
        request: FluidStackApi.CreateSshKeyRequest,
        requestOptions?: SshKeys.RequestOptions
    ): Promise<FluidStackApi.SshKeyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                "ssh_keys"
            ),
            method: "POST",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CreateSshKeyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.SshKeyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new FluidStackApi.UnauthorizedError(
                        await serializers.Message.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new FluidStackApi.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FluidStackApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FluidStackApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FluidStackApiTimeoutError();
            case "unknown":
                throw new errors.FluidStackApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete an existing SSH key using the SSH key name.
     *
     * @param {string} sshKeyName
     * @param {SshKeys.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.sshKeys.delete("my_key")
     */
    public async delete(sshKeyName: string, requestOptions?: SshKeys.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                `ssh_keys/${encodeURIComponent(sshKeyName)}`
            ),
            method: "DELETE",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new FluidStackApi.UnauthorizedError(
                        await serializers.Message.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new FluidStackApi.UnprocessableEntityError(
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FluidStackApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FluidStackApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FluidStackApiTimeoutError();
            case "unknown":
                throw new errors.FluidStackApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
