var exports = module.exports={};

// Mean Forecast Error
exports.mfe = function(a,b){
    let error = 0;
    for (let i = 0; i < a.length; i++) {
		error += (a[i] - b[i])
	}
	return error / a.length
}

// Mean Squared Error
exports.mse = function(a, b) {
	let error = 0
	for (let i = 0; i < a.length; i++) {
		error += Math.pow((b[i] - a[i]), 2)
	}
	return error / a.length
}

// Root Mean Squared Error
exports.rmse = function(a,b){
    let error = 0
    for (let i = 0; i < a.length; i++) {
		error += Math.pow((b[i] - a[i]), 2)
	}
    error = Math.sqrt(error/a.length)
    return error
}

exports.mae = function(a,b){
    let error = 0
    for (let i = 0; i < a.length; i++) {
		error += Math.abs(a[i] - b[i])
	}

    return error
}

exports.mase =function(a,b){
    let error = 0
    for (let i = 0; i < a.length; i++) {
		error += Math.abs(a[i] - b[i])
	}
    mae_error_naive = error/(a.length - 1)
    mae_error_algo = error/(a.length)
    mase = (mae_error_algo/mae_error_naive)

    return mase
}

exports.mape = function(a,b){
    let error = 0
    
    for (let i = 0; i < a.length; i++) {
		error += (Math.abs(a[i] - b[i])/a[i])
	}
    mape = error/a.length

    return this.mape;
}

exports.smape = function(a,b){
    let error = 0
    
    for (let i = 0; i < a.length; i++) {
		error += (Math.abs(a[i] - b[i]))/((a[i] + b[i])/2)
	}
    smape = error/a.length

    return this.smape;
}

a = [1.0, 2.9, 2.8]
b = [-19.8, -18.2, -10.11]
