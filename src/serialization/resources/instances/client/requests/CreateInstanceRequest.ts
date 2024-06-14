/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as FluidStackApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { GpuType } from "../../../../types/GpuType";
import { SupportedOperatingSystem } from "../../../../types/SupportedOperatingSystem";

export const CreateInstanceRequest: core.serialization.Schema<
    serializers.CreateInstanceRequest.Raw,
    FluidStackApi.CreateInstanceRequest
> = core.serialization.object({
    name: core.serialization.string(),
    gpuType: core.serialization.property("gpu_type", GpuType),
    gpuCount: core.serialization.property("gpu_count", core.serialization.number().optional()),
    sshKeys: core.serialization.property("ssh_keys", core.serialization.list(core.serialization.string())),
    operatingSystemLabel: core.serialization.property("operating_system_label", SupportedOperatingSystem.optional()),
});

export declare namespace CreateInstanceRequest {
    interface Raw {
        name: string;
        gpu_type: GpuType.Raw;
        gpu_count?: number | null;
        ssh_keys: string[];
        operating_system_label?: SupportedOperatingSystem.Raw | null;
    }
}
