/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as FluidStackApi from "../../api/index";
import * as core from "../../core";
import { GpuType } from "./GpuType";
import { SupportedOperatingSystem } from "./SupportedOperatingSystem";

export const CreateInstanceResponse: core.serialization.ObjectSchema<
    serializers.CreateInstanceResponse.Raw,
    FluidStackApi.CreateInstanceResponse
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    gpuType: core.serialization.property("gpu_type", GpuType),
    operatingSystemLabel: core.serialization.property("operating_system_label", SupportedOperatingSystem),
});

export declare namespace CreateInstanceResponse {
    interface Raw {
        id: string;
        name: string;
        gpu_type: GpuType.Raw;
        operating_system_label: SupportedOperatingSystem.Raw;
    }
}
