/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FluidStackApi from "../../../../api/index";
import * as core from "../../../../core";
import { SshKeyResponse } from "../../../types/SshKeyResponse";

export const Response: core.serialization.Schema<
    serializers.sshKeys.list.Response.Raw,
    FluidStackApi.SshKeyResponse[]
> = core.serialization.list(SshKeyResponse);

export declare namespace Response {
    type Raw = SshKeyResponse.Raw[];
}
