function CalculatePrimes(calculateTo) {

        var largestPrime = 1;
        var isPrime;

        for (var i = 1; i <= calculateTo; i++)
        {
            isPrime = true;

            for (var j = 2; j <= i / 2; j++)
            {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                largestPrime = i;
            }
        }

        return largestPrime;
}

module.exports = CalculatePrimes;