<!-- Start SDK Example Usage -->


```typescript
import { SDK } from "openapi";
import { GetDrinkResponse } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.drinks.getDrink({
  drinkId: "corrupti",
}).then((res: GetDrinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->