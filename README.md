# Time Series Error (tserror) :chart_with_upwards_trend: :rocket:

This node package consists with basic time series error evaluation metric implementation in js.
You can use this package for any machine learning model evaluation other than the time series secnarios.

Recommended Release: 2.0.5

## How to use

- First, you have to assign the actual and forecasted the data points in seperate lists in choronological order.
- Make sure to invoke the methods with only the values(data points) without time_stamps.


## Implemented Error Metrics 

### Mean Forecast Error (MFE)
#### mfe(real_time_values, forecasted_data_values)

Provides the direction of the error. Better forecasts yields MFE near to zero. Doesn't identify extreme errors.
Easily identify data transformation and observation scale.

### Mean Squared Error (MSE)
#### mse(real_data_values, forecasted_data_values)

Provides overall idea of the error. Better forecasts yields MSE close to zero. Resolve not penalizing the xtereme errors by MFE.
Sensitive to observations scale and data transformations.

### Root Mean Sqaured Error (RMSE)
#### rmse(real_data_values, forecasted_data_values)

Provides rooted error value of mse. Shows significance of the balanced error.
Better when the rmse near to zero.

### Mean Absolute Error (MAE)
#### mae(real_data_values, forecasted_data_values)

Summation of the absolute terms of the errors despicts in Mean Absolute Error

### Mean Absolute Scaled Error (MASE)
#### mase(real_data_values, forecasted_data_values)

MASE is a scale-free error metric that gives each error as a ratio compared to a baseline’s average error.

### Mean Absolute Percentage Error (MAPE)
#### mape(real_data_values, forecasted_data_values)

Total error represented as an percentage, which is scale -independent and can be used for comparing on different scales.
This is asymmetric and allows heavier penality on negative errors than positive errors.

### Scaled Mean Absolute Percentage Error (sMAPE)
#### smape(real_data_values, forecasted_data_values)

Resolved the asymmetric of MAPE. Error persent as a percentage. This error originally introduced in M3 competition. Fixes the shortcoming of the original MAPE — it has both the lower (0%) and the upper (200%) bounds.

## Example

```
var myerror = require('time-series-error');

a = [1.78,3.76,6.78,9.0]
b = [1.65,3.80,6.10,9.5]

console.log(myerror.mfe(a,b))
console.log(myerror.mse(a,b))
console.log(myerror.rmse(a,b))

```
