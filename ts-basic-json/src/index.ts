//演習１
const a = {
    id: 1, name: "Taro"
}
const jasont = JSON.stringify(a)
console.log("jasontext", jasont)
//演習２ 
const pretty = JSON.stringify(a, null, 2)
console.log(pretty)
//演習３
const Jasona = { "x": 10, "y": 20 };
const jasonb = JSON.stringify(Jasona)
const parsed = JSON.parse(jasonb)
console.log(jasonb)
//演習４
const broken = "{"x",,:10,"y":20}"//,多い
try {
    JSON.parse(broken);
    console.log("no")
} catch (e: unknown) {
    if (e instanceof Error) {
        console.log("error", e.messeage)
    }
}