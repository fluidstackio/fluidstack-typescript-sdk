/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as FluidStackApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { GpuType } from "../../../../types/GpuType";
import { SupportedOperatingSystem } from "../../../../types/SupportedOperatingSystem";
import { Region } from "../../../../types/Region";
import { VolumeInstanceResponse } from "../../../../types/VolumeInstanceResponse";

export const CreateInstanceRequest: core.serialization.Schema<
    serializers.CreateInstanceRequest.Raw,
    FluidStackApi.CreateInstanceRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    gpuType: core.serialization.property("gpu_type", GpuType),
    gpuCount: core.serialization.property("gpu_count", core.serialization.number().optional()),
    sshKey: core.serialization.property("ssh_key", core.serialization.string()),
    operatingSystemLabel: core.serialization.property("operating_system_label", SupportedOperatingSystem.optional()),
    region: Region.optional(),
    volumes: core.serialization.list(VolumeInstanceResponse).optional(),
});

export declare namespace CreateInstanceRequest {
    interface Raw {
        name?: string | null;
        gpu_type: GpuType.Raw;
        gpu_count?: number | null;
        ssh_key: string;
        operating_system_label?: SupportedOperatingSystem.Raw | null;
        region?: Region.Raw | null;
        volumes?: VolumeInstanceResponse.Raw[] | null;
    }
}
