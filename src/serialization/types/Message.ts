/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as FluidStackApi from "../../api/index";
import * as core from "../../core";

export const Message: core.serialization.ObjectSchema<serializers.Message.Raw, FluidStackApi.Message> =
    core.serialization.object({
        message: core.serialization.string(),
    });

export declare namespace Message {
    interface Raw {
        message: string;
    }
}