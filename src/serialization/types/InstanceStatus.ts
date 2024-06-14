/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as FluidStackApi from "../../api/index";
import * as core from "../../core";

export const InstanceStatus: core.serialization.Schema<serializers.InstanceStatus.Raw, FluidStackApi.InstanceStatus> =
    core.serialization.enum_(["running", "pending", "unhealthy", "shutting_down", "terminated", "stopping", "stopped"]);

export declare namespace InstanceStatus {
    type Raw = "running" | "pending" | "unhealthy" | "shutting_down" | "terminated" | "stopping" | "stopped";
}