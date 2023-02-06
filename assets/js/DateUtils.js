function calculate_age(dob) {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById("age").innerHTML = "" + calculate_age(new Date(2005, 10, 30))