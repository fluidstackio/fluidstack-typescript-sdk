/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FluidStackApi from "../index";

export interface CreateInstanceResponse {
    id: string;
    name: string;
    gpuType: FluidStackApi.GpuType;
    operatingSystemLabel: FluidStackApi.SupportedOperatingSystem;
}