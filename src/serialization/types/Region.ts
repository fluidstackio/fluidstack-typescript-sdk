/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as FluidStackApi from "../../api/index";
import * as core from "../../core";

export const Region: core.serialization.Schema<serializers.Region.Raw, FluidStackApi.Region> = core.serialization.enum_(
    ["NORWAY", "CANADA", "SWEDEN", "NETHERLANDS"]
);

export declare namespace Region {
    type Raw = "NORWAY" | "CANADA" | "SWEDEN" | "NETHERLANDS";
}