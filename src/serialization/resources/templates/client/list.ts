/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FluidStackApi from "../../../../api/index";
import * as core from "../../../../core";
import { OperatingSystemResponse } from "../../../types/OperatingSystemResponse";

export const Response: core.serialization.Schema<
    serializers.templates.list.Response.Raw,
    FluidStackApi.OperatingSystemResponse[]
> = core.serialization.list(OperatingSystemResponse);

export declare namespace Response {
    type Raw = OperatingSystemResponse.Raw[];
}
