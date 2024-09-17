/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FluidStackApi from "../index";

export interface ConfigurationInstanceResponse {
    id: FluidStackApi.EntityId;
    /** The GPU model of the configuration. */
    gpuModel?: FluidStackApi.GpuModelResponse;
    /** The CPU model of the configuration. */
    cpuModel?: string;
    /** The number of GPUs in the configuration. */
    gpuCount: number;
    /** The number of CPUs in the configuration. */
    cpuCount: number;
    /** The size of NVMe in the configuration. */
    nvmeStorageSizeGb: number;
    /** The amount of RAM memory in the configuration. */
    memorySizeGb: number;
    estimatedProvisioningTimeMinutes?: number;
    region: FluidStackApi.Region;
}
