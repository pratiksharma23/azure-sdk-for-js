/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureFirewall, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPut.json
 */
async function createAzureFirewall() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    location: "West US",
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: []
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPutWithAdditionalProperties.json
 */
async function createAzureFirewallWithAdditionalProperties() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    additionalProperties: { key1: "value1", key2: "value2" },
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    ipGroups: [],
    location: "West US",
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: []
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPutWithIpGroups.json
 */
async function createAzureFirewallWithIPGroups() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    location: "West US",
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: []
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPutWithZones.json
 */
async function createAzureFirewallWithZones() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    location: "West US 2",
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: ["1", "2", "3"]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPutWithMgmtSubnet.json
 */
async function createAzureFirewallWithManagementSubnet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    applicationRuleCollections: [
      {
        name: "apprulecoll",
        action: { type: "Deny" },
        priority: 110,
        rules: [
          {
            name: "rule1",
            description: "Deny inbound rule",
            protocols: [{ port: 443, protocolType: "Https" }],
            sourceAddresses: ["216.58.216.164", "10.0.0.0/24"],
            targetFqdns: ["www.test.com"]
          }
        ]
      }
    ],
    ipConfigurations: [
      {
        name: "azureFirewallIpConfiguration",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet"
        }
      }
    ],
    location: "West US",
    managementIpConfiguration: {
      name: "azureFirewallMgmtIpConfiguration",
      publicIPAddress: {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/managementPipName"
      },
      subnet: {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallManagementSubnet"
      }
    },
    natRuleCollections: [
      {
        name: "natrulecoll",
        action: { type: "Dnat" },
        priority: 112,
        rules: [
          {
            name: "DNAT-HTTPS-traffic",
            description: "D-NAT all outbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["443"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedAddress: "1.2.3.5",
            translatedPort: "8443"
          },
          {
            name: "DNAT-HTTP-traffic-With-FQDN",
            description: "D-NAT all inbound web traffic for inspection",
            destinationAddresses: ["1.2.3.4"],
            destinationPorts: ["80"],
            protocols: ["TCP"],
            sourceAddresses: ["*"],
            translatedFqdn: "internalhttpserver",
            translatedPort: "880"
          }
        ]
      }
    ],
    networkRuleCollections: [
      {
        name: "netrulecoll",
        action: { type: "Deny" },
        priority: 112,
        rules: [
          {
            name: "L4-traffic",
            description: "Block traffic based on source IPs and ports",
            destinationAddresses: ["*"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: [
              "192.168.1.1-192.168.1.12",
              "10.1.4.12-10.1.4.255"
            ]
          },
          {
            name: "L4-traffic-with-FQDN",
            description:
              "Block traffic based on source IPs and ports to amazon",
            destinationFqdns: ["www.amazon.com"],
            destinationPorts: ["443-444", "8443"],
            protocols: ["TCP"],
            sourceAddresses: ["10.2.4.12-10.2.4.255"]
          }
        ]
      }
    ],
    sku: { name: "AZFW_VNet", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    zones: []
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Azure Firewall.
 *
 * @summary Creates or updates the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/AzureFirewallPutInHub.json
 */
async function createAzureFirewallInVirtualHub() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const azureFirewallName = "azurefirewall";
  const parameters: AzureFirewall = {
    firewallPolicy: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/policy1"
    },
    hubIPAddresses: { publicIPs: { addresses: [], count: 1 } },
    location: "West US",
    sku: { name: "AZFW_Hub", tier: "Standard" },
    tags: { key1: "value1" },
    threatIntelMode: "Alert",
    virtualHub: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1"
    },
    zones: []
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.beginCreateOrUpdateAndWait(
    resourceGroupName,
    azureFirewallName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAzureFirewall();
  createAzureFirewallWithAdditionalProperties();
  createAzureFirewallWithIPGroups();
  createAzureFirewallWithZones();
  createAzureFirewallWithManagementSubnet();
  createAzureFirewallInVirtualHub();
}

main().catch(console.error);
