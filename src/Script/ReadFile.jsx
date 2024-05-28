
async function LesFil(){
    const response = await fetch("teltinfo/xyKords.txt");
    const text = await response.text();
    const data = text.split("\n").map(line => [line]);
    return data;
}

export default LesFil
