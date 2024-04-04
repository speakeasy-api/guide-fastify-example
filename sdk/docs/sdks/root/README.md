# Root
(*root*)

### Available Operations

* [getRoot](#getroot)

## getRoot

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetRootResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.root.getRoot().then((res: GetRootResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetRootResponse](../../models/operations/getrootresponse.md)>**

