// use fibonacci identites for 2n and 2n-1 in terms of n and n-1 
// and binary representation for "fast" (log n time) calculation of F_n

// F_2n = (F_n)^2 + (F_n-1)^2
// F_2n-1 = (F_n)^2 + 2(F_n)(F_n-1)



// findBinRep finds the binary representation of an integer in REVERSE order
// eg. 40 = 101000, findBinRep(40) = [0, 0, 0, 1, 0, 1]
const findBinRep = (n) => {
    let res = []
    let m = n
    while(m){
        res.push(m%2)
        m-=(m%2)
        m/=2
    }
    return res
}

const fastFib = (n) => {

}

const n = 40
const res = findBinRep(n)
console.log(res)