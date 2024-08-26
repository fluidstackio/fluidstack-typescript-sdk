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

This endpoint is used to create a new instance. You must provide a custom `name` for the instance, its `gpu_type`, and the name of its `ssh_key`.

If no values are provided for the `gpu_count` and `operating_system_label`, the default values of `1` and `ubuntu_20_04_lts_nvidia` are used respectively.

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
    name: "my_instance_name",
    gpuType: FluidStackApi.GpuType.RtxA500024Gb,
    sshKey: "my_ssh_key",
    operatingSystemLabel: FluidStackApi.SupportedOperatingSystem.Ubuntu2004LtsNvidia,
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

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">get</a>(instanceId) -> FluidStackApi.InstanceResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint is used to retrieve a single instance associated with the authenticated user by its ID.

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
await fluidStackApi.instances.get("{instance_id}");
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

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">delete</a>(instanceId) -> unknown</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint is used to terminate an existing instance by its ID.

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
await fluidStackApi.instances.delete("{instance_id}");
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

<details><summary> <code>fluidStackApi.instances.<a href="./src/api/resources/instances/client/Client.ts">stop</a>(instanceId) -> FluidStackApi.ListInstanceResponse</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

This endpoint is used to stop an existing instance by its ID.

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
await fluidStackApi.instances.stop("{instance_id}");
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

This endpoint is used to start an existing instance by its ID.

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
await fluidStackApi.instances.start("{instance_id}");
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

Fetch a list of SSH key names associated with the authenticated user.

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

A unique name must be provided for the SSH key, along with a public key. The public key you provide is stored on your FluidStack account for use in SSH authentication.

Supported public key formats: ssh-rsa, ssh-dss (DSA), ssh-ed25519, and ecdsa keys with NIST curves.

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
    name: "my_ssh_key",
    publicKey: "<my_public_key>",
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

<details><summary> <code>fluidStackApi.sshKeys.<a href="./src/api/resources/sshKeys/client/Client.ts">delete</a>(sshKeyName) -> unknown</code> </summary>

<dl>

<dd>

#### 📝 Description

<dl>

<dd>

<dl>

<dd>

Delete an existing SSH key by its name.

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
await fluidStackApi.sshKeys.delete("{ssh_key_name}");
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

List available configurations including GPU type, GPU count, RAM size, and disk size.

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

List available OS template images. Use the `label` for your desired template as the `operating_system_label` when you create an instance.

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
