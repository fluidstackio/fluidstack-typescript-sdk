/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Instances } from "./api/resources/instances/client/Client";
import { SshKeys } from "./api/resources/sshKeys/client/Client";
import { Configurations } from "./api/resources/configurations/client/Client";
import { Templates } from "./api/resources/templates/client/Client";

export declare namespace FluidStackApiClient {
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

export class FluidStackApiClient {
    constructor(protected readonly _options: FluidStackApiClient.Options = {}) {}

    protected _instances: Instances | undefined;

    public get instances(): Instances {
        return (this._instances ??= new Instances(this._options));
    }

    protected _sshKeys: SshKeys | undefined;

    public get sshKeys(): SshKeys {
        return (this._sshKeys ??= new SshKeys(this._options));
    }

    protected _configurations: Configurations | undefined;

    public get configurations(): Configurations {
        return (this._configurations ??= new Configurations(this._options));
    }

    protected _templates: Templates | undefined;

    public get templates(): Templates {
        return (this._templates ??= new Templates(this._options));
    }
}
