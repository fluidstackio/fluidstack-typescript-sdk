/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as FluidStackApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Instances {
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

export class Instances {
    constructor(protected readonly _options: Instances.Options = {}) {}

    /**
     * This endpoint is used to retrieve a list of all instances associated with the authenticated user.
     *
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.list()
     */
    public async list(requestOptions?: Instances.RequestOptions): Promise<FluidStackApi.ListInstanceResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                "instances"
            ),
            method: "GET",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.instances.list.Response.parseOrThrow(_response.body, {
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
     * This endpoint is used to create a new instance. You must provide a custom `name` for the instance, its `gpu_type`, and the name of its `ssh_key`.
     *
     * If no values are provided for the `gpu_count` and `operating_system_label`, the default values of `1` and `ubuntu_20_04_lts_nvidia` are used respectively.
     *
     * @param {FluidStackApi.CreateInstanceRequest} request
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.create({
     *         name: "my_instance_name",
     *         gpuType: FluidStackApi.GpuType.RtxA500024Gb,
     *         sshKey: "my_ssh_key",
     *         operatingSystemLabel: FluidStackApi.SupportedOperatingSystem.Ubuntu2004LtsNvidia
     *     })
     */
    public async create(
        request: FluidStackApi.CreateInstanceRequest,
        requestOptions?: Instances.RequestOptions
    ): Promise<FluidStackApi.CreateInstanceResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                "instances"
            ),
            method: "POST",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CreateInstanceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.CreateInstanceResponse.parseOrThrow(_response.body, {
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
     * This endpoint is used to retrieve a single instance associated with the authenticated user by its ID.
     *
     * @param {string} instanceId
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.get("{instance_id}")
     */
    public async get(
        instanceId: string,
        requestOptions?: Instances.RequestOptions
    ): Promise<FluidStackApi.InstanceResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                `instances/${encodeURIComponent(instanceId)}`
            ),
            method: "GET",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.InstanceResponse.parseOrThrow(_response.body, {
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
     * This endpoint is used to terminate an existing instance by its ID.
     *
     * @param {string} instanceId
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.delete("{instance_id}")
     */
    public async delete(instanceId: string, requestOptions?: Instances.RequestOptions): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                `instances/${encodeURIComponent(instanceId)}`
            ),
            method: "DELETE",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
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
     * This endpoint is used to stop an existing instance by its ID.
     *
     * @param {string} instanceId
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.stop("{instance_id}")
     */
    public async stop(
        instanceId: string,
        requestOptions?: Instances.RequestOptions
    ): Promise<FluidStackApi.ListInstanceResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                `instances/${encodeURIComponent(instanceId)}/stop`
            ),
            method: "PUT",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.ListInstanceResponse.parseOrThrow(_response.body, {
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
     * This endpoint is used to start an existing instance by its ID.
     *
     * @param {string} instanceId
     * @param {Instances.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link FluidStackApi.UnauthorizedError}
     * @throws {@link FluidStackApi.UnprocessableEntityError}
     *
     * @example
     *     await fluidStackApi.instances.start("{instance_id}")
     */
    public async start(
        instanceId: string,
        requestOptions?: Instances.RequestOptions
    ): Promise<FluidStackApi.ListInstanceResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FluidStackApiEnvironment.Default,
                `instances/${encodeURIComponent(instanceId)}/start`
            ),
            method: "PUT",
            headers: {
                "api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fluidstack",
                "X-Fern-SDK-Version": "0.0.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.ListInstanceResponse.parseOrThrow(_response.body, {
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
}
