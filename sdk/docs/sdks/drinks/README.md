# Drinks
(*drinks*)

## Overview

Drink related end-points

Find out more
<http://swagger.io>
### Available Operations

* [getDrink](#getdrink)

## getDrink

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetDrinkResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.drinks.getDrink({
  drinkId: "distinctio",
}).then((res: GetDrinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetDrinkRequest](../../models/operations/getdrinkrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                   | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetDrinkResponse](../../models/operations/getdrinkresponse.md)>**

