## Instances

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">list</a>() -> FluidStackApi.ListInstanceResponse[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint is used to retrieve a list of all instances associated with the authenticated user.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.instances.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `Instances.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">create</a>({ ...params }) -> FluidStackApi.CreateInstanceResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint is used to create a new instance. You must provide a name for the instance, the gpu_type, and a list of SSH key names.

If you do not provide values for gpu_count and operating_system_label when calling this endpoint, the default values of 1 and 'ubuntu_20_04_lts' are used respectively.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.instances.create({
    name: "name",
    gpuType: FluidStackApi.GpuType.RtxA400016Gb,
    sshKeys: ["<ssh_key_name>"],
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FluidStackApi.CreateInstanceRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Instances.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">stop</a>(instanceId) -> FluidStackApi.ListInstanceResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint can be used to stop an existing instance by its ID.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.instances.stop("instance_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**instanceId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Instances.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">start</a>(instanceId) -> FluidStackApi.ListInstanceResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint can be used to start an existing instance by its ID.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.instances.start("instance_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**instanceId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Instances.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">delete</a>(instanceId) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint can be used to terminate an existing instance by its ID.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.instances.delete("instance_id");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**instanceId: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `Instances.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## SshKeys

<details><summary> <code>fluidStackApi.sshKeys.<a href="./src/api/resources/sshKeys/client/Client.ts">list</a>() -> FluidStackApi.SshKeyResponse[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Fetch a list of SSH keys associated with the authenticated user.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.sshKeys.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `SshKeys.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.sshKeys.<a href="./src/api/resources/sshKeys/client/Client.ts">create</a>({ ...params }) -> FluidStackApi.SshKeyResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Create a new SSH key for the authenticated user.

You must provide a unique name for the SSH key, along with a public key. The public key you provide will be duplicated on your FluidStack account for use as as an SSH key.

<Note>Supported public key formats: ssh-rsa, ssh-dss (DSA), ssh-ed25519, ecdsa keys with NIST curves</Note>

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.sshKeys.create({
    name: "mykey",
    publicKey: "<public_key>",
});
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**request: `FluidStackApi.CreateSshKeyRequest`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SshKeys.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

<details><summary> <code>fluidStackApi.sshKeys.<a href="./src/api/resources/sshKeys/client/Client.ts">delete</a>(sshKeyName) -> void</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Delete an existing SSH key using the SSH key name.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.sshKeys.delete("my_key");
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**sshKeyName: `string`**

</dd>

</dl>

<dl>

<dd>

**requestOptions: `SshKeys.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Configurations

<details><summary> <code>fluidStackApi.configurations.<a href="./src/api/resources/configurations/client/Client.ts">list</a>() -> FluidStackApi.ConfigurationResponse[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

List available configurations including GPU type, GPU count, RAM size and disk size.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.configurations.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `Configurations.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>

## Templates

<details><summary> <code>fluidStackApi.templates.<a href="./src/api/resources/templates/client/Client.ts">list</a>() -> FluidStackApi.OperatingSystemResponse[]</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

List available OS template images. Use the label to create an instance.

</dd>

</dl>

</dd>

</dl>

#### 🔌 Usage

<dl>

<dd>

<dl>

<dd>

```ts
await fluidStackApi.templates.list();
```

</dd>

</dl>

</dd>

</dl>

#### ⚙️ Parameters

<dl>

<dd>

<dl>

<dd>

**requestOptions: `Templates.RequestOptions`**

</dd>

</dl>

</dd>

</dl>

</dd>

</dl>
</details>
