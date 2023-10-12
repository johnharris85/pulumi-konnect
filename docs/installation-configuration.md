---
title: Konnect Installation & Configuration
meta_desc: Information on how to install the Konnect provider.
layout: installation
---

## Installation

The Pulumi Konnect provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@johnharris85/konnect`](https://www.npmjs.com/package/@johnharris85/konnect)
* Python: [`johnharris85_konnect`](https://pypi.org/project/johnharris85_konnect/)
* Go: [`github.com/johnharris85/pulumi-konnect/sdk/go/konnect`](https://pkg.go.dev/github.com/johnharris85/pulumi-konnect/sdk/go/konnect)
* .NET: [`johnharris85.Konnect`](https://www.nuget.org/packages/johnharris85.Konnect)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `konnect` provider:

- `konnect:apiKey` (environment: `konnect_API_KEY`) - the API key for `konnect`
- `konnect:region` (environment: `konnect_REGION`) - the region in which to deploy resources

### Provider Binary

The Konnect provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource konnect <version>
```

Replace the version string `<version>` with your desired version.
