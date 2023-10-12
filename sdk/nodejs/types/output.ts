// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetNodesNode {
    /**
     * **(String)** Hash of the current configuration state of node.
     */
    configHash: string;
    /**
     * **(String)** Id of certificate used in communication between node and runtime group.
     */
    dataPlaneCertId: string;
    /**
     * **(String)** Hostname of node.
     */
    hostname: string;
    /**
     * **(String)** Id of node.
     */
    id: string;
    /**
     * **(Integer)** Last time of ping of node.
     */
    lastPing: number;
    /**
     * **(String)** Type of node.
     */
    type: string;
    /**
     * **(String)** Version of node.
     */
    version: string;
}

export interface RouteHeader {
    /**
     * **(Required, String)** Name of header this route should require.
     */
    name: string;
    /**
     * **(Required, List of String)** Allowed values this header should equal.
     */
    values: string[];
}

export interface TeamMappingsMapping {
    /**
     * **(Required, String)** Identifier of an IdP group that is contained with OIDC ID token for groups claim
     */
    group: string;
    /**
     * **(Required, List of String)** Konnect teams that should map to this group.
     */
    teamIds: string[];
}

