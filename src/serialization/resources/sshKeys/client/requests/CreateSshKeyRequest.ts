/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as FluidStackApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const CreateSshKeyRequest: core.serialization.Schema<
    serializers.CreateSshKeyRequest.Raw,
    FluidStackApi.CreateSshKeyRequest
> = core.serialization.object({
    name: core.serialization.string(),
    publicKey: core.serialization.property("public_key", core.serialization.string()),
});

export declare namespace CreateSshKeyRequest {
    interface Raw {
        name: string;
        public_key: string;
    }
}
