/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    // TODO: return the number of grades
    return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
    // TODO: return the sum of all the grades
    let a = 0
    grades.forEach((g)=>{
        a+=g;
    })
    return a;
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let a = 0
    grades.forEach((g)=>{
        a+=g;
    })
    return a/grades.length;
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    // TODO: return all passing grades (10 and above)
    return grades.filter(g=>g>9); 
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    // TODO: return all failing grades (9 and below)
    return grades.filter(g=>g<10); 
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    // TODO: return all the grades raised by 1 (grades should not exceed 20)
    return grades.map((g)=>{
        if(g<20) return g+=1;
        return g;
    })
}