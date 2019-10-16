/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/messageIdMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a MessageId. */
export class MessageId {
  private readonly client: StorageClientContext;

  /**
   * Create a MessageId.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Update operation was introduced with version 2011-08-18 of the Queue service API. The Update
   * Message operation updates the visibility timeout of a message. You can also use this operation
   * to update the contents of a message. A message must be in a format that can be included in an
   * XML request with UTF-8 encoding, and the encoded message can be up to 64KB in size.
   * @param queueMessage A Message object which can be stored in a Queue
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param visibilitytimeout Optional. Specifies the new visibility timeout value, in seconds,
   * relative to server time. The default value is 30 seconds. A specified value must be larger than
   * or equal to 1 second, and cannot be larger than 7 days, or larger than 2 hours on REST protocol
   * versions prior to version 2011-08-18. The visibility timeout of a message can be set to a value
   * later than the expiry time.
   * @param [options] The optional parameters
   * @returns Promise<Models.MessageIdUpdateResponse>
   */
  update(queueMessage: Models.QueueMessage, popReceipt: string, visibilitytimeout: number, options?: Models.MessageIdUpdateOptionalParams): Promise<Models.MessageIdUpdateResponse>;
  /**
   * @param queueMessage A Message object which can be stored in a Queue
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param visibilitytimeout Optional. Specifies the new visibility timeout value, in seconds,
   * relative to server time. The default value is 30 seconds. A specified value must be larger than
   * or equal to 1 second, and cannot be larger than 7 days, or larger than 2 hours on REST protocol
   * versions prior to version 2011-08-18. The visibility timeout of a message can be set to a value
   * later than the expiry time.
   * @param callback The callback
   */
  update(queueMessage: Models.QueueMessage, popReceipt: string, visibilitytimeout: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param queueMessage A Message object which can be stored in a Queue
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param visibilitytimeout Optional. Specifies the new visibility timeout value, in seconds,
   * relative to server time. The default value is 30 seconds. A specified value must be larger than
   * or equal to 1 second, and cannot be larger than 7 days, or larger than 2 hours on REST protocol
   * versions prior to version 2011-08-18. The visibility timeout of a message can be set to a value
   * later than the expiry time.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(queueMessage: Models.QueueMessage, popReceipt: string, visibilitytimeout: number, options: Models.MessageIdUpdateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  update(queueMessage: Models.QueueMessage, popReceipt: string, visibilitytimeout: number, options?: Models.MessageIdUpdateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.MessageIdUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        queueMessage,
        popReceipt,
        visibilitytimeout,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.MessageIdUpdateResponse>;
  }

  /**
   * The Delete operation deletes the specified message.
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MessageIdDeleteResponse>
   */
  deleteMethod(popReceipt: string, options?: Models.MessageIdDeleteMethodOptionalParams): Promise<Models.MessageIdDeleteResponse>;
  /**
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param callback The callback
   */
  deleteMethod(popReceipt: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call
   * to the Get Messages or Update Message operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(popReceipt: string, options: Models.MessageIdDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(popReceipt: string, options?: Models.MessageIdDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.MessageIdDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        popReceipt,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.MessageIdDeleteResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}/messages/{messageid}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.popReceipt,
    Parameters.visibilitytimeout1,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "queueMessage",
    mapper: {
      ...Mappers.QueueMessage,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    204: {
      headersMapper: Mappers.MessageIdUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}/messages/{messageid}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.popReceipt,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.MessageIdDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
