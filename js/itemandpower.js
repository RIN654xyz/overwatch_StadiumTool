
/*
function ow2IconClick(){
    const chat = document.getElementById("chat")
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
}
*/

/* function IAPbutton(){
    const b=document.getElementById("itemButton");
    b.style.backgroundColor = "lightgray";
        document.getElementById("itemButton").style.backgroundColor = "lightgray";
} */

//ボタン選択カラー変更
//武器
let isCheckWeapon = true;
function IAPbuttonWeapon(){
    var Button = document.getElementById("itemButtonWeapon");
    if(isCheckWeapon){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckWeapon = !isCheckWeapon;
}
/* Button.style.backgroundColor = (Button.style.backgroundColor == "lightgray") ? "white" : "lightgray"; */

//アビリティ
let isCheckAbility = true;
function IAPbuttonAbility(){
    var Button = document.getElementById("itemButtonAbility");
    if(isCheckAbility){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckAbility = !isCheckAbility;
}
let isCheckSurvival = true;
function IAPbuttonSurvival(){
    var Button = document.getElementById("itemButtonSurvival");
    if(isCheckSurvival){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckSurvival = !isCheckSurvival;
}
let isCheckCommon = true;
function IAPbuttonCommon(){
    var Button = document.getElementById("itemButtonCommon");
    if(isCheckCommon){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckCommon = !isCheckCommon;
}
let isCheckRare = true;
function IAPbuttonRare(){
    var Button = document.getElementById("itemButtonRare");
    if(isCheckRare){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckRare = !isCheckRare;
}
let isCheckEpic = true;
function IAPbuttonEpic(){
    var Button = document.getElementById("itemButtonEpic");
    if(isCheckEpic){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckEpic = !isCheckEpic;
}
let isCheckLife = true;
function IAPbuttonLife(){
    var Button = document.getElementById("itemButtonLife");
    if(isCheckLife){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckLife = !isCheckLife;
}
let isCheckArmor = true;
function IAPbuttonArmor(){
    var Button = document.getElementById("itemButtonArmor");
    if(isCheckArmor){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckArmor = !isCheckArmor;
}
let isCheckShield = true;
function IAPbuttonShield(){
    var Button = document.getElementById("itemButtonShield");
    if(isCheckShield){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckShield = !isCheckShield;
}
let isCheckWeaponPower = true;
function IAPbuttonWeaponPower(){
    var Button = document.getElementById("itemButtonWeaponPower");
    if(isCheckWeaponPower){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckWeaponPower = !isCheckWeaponPower;
}
let isCheckAbilityPower = true;
function IAPbuttonAbilityPower(){
    var Button = document.getElementById("itemButtonAbilityPower");
    if(isCheckAbilityPower){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckAbilityPower = !isCheckAbilityPower;
}
let isCheckAttackSpeed = true;
function IAPbuttonAttackSpeed(){
    var Button = document.getElementById("itemButtonAttackSpeed");
    if(isCheckAttackSpeed){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckAttackSpeed = !isCheckAttackSpeed;
}
let isCheckCtReducation = true;
function IAPbuttonCtReducation(){
    var Button = document.getElementById("itemButtonCtReducation");
    if(isCheckCtReducation){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckCtReducation = !isCheckCtReducation;
}
let isCheckAmmo = true;
function IAPbuttonAmmo(){
    var Button = document.getElementById("itemButtonAmmo");
    if(isCheckAmmo){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckAmmo = !isCheckAmmo;
}
let isCheckWeapon_LifeSteal = true;
function IAPbuttonWeapon_LifeSteal(){
    var Button = document.getElementById("itemButtonWeapon_LifeSteal");
    if(isCheckWeapon_LifeSteal){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckWeapon_LifeSteal = !isCheckWeapon_LifeSteal;
}
let isCheckAbility_LifeSteal = true;
function IAPbuttonAbility_LifeSteal(){
    var Button = document.getElementById("itemButtonAbility_LifeSteal");
    if(isCheckAbility_LifeSteal){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckAbility_LifeSteal = !isCheckAbility_LifeSteal;
}
let isCheckSpeed = true;
function IAPbuttonSpeed(){
    var Button = document.getElementById("itemButtonSpeed");
    if(isCheckSpeed){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckSpeed = !isCheckSpeed;
}
let isCheckReloadSpeed = true;
function IAPbuttonReloadSpeed(){
    var Button = document.getElementById("itemButtonReloadSpeed");
    if(isCheckReloadSpeed){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckReloadSpeed = !isCheckReloadSpeed;
}
let isCheckMeleeDamage = true;
function IAPbuttonMeleeDamage(){
    var Button = document.getElementById("itemButtonMeleeDamage");
    if(isCheckMeleeDamage){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckMeleeDamage = !isCheckMeleeDamage;
}
let isCheckCritical = true;
function IAPbuttonCritical(){
    var Button = document.getElementById("itemButtonCritical");
    if(isCheckCritical){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckCritical = !isCheckCritical;
}
let isCheckOthers = true;
function IAPbuttonOthers(){
    var Button = document.getElementById("itemButtonOthers");
    if(isCheckOthers){
        Button.style.backgroundColor = "white";
    }else{
        Button.style.backgroundColor = "lightgray";
    }
    isCheckOthers = !isCheckOthers;
}

//タブ切り替え
const tabItem = document.getElementById('tabItem');
const itemContent = document.getElementById('item-content');
const tabPower = document.getElementById('tabPower');
const powerContent = document.getElementById('power-content');

// アイテムタブに遷移
function changeTabItem() {
   itemContent.style.display = "block";
   powerContent.style.display = "none";
   tabPower.style.backgroundColor = "white";
   tabItem.style.backgroundColor = "lightgray";
   tabPower.style.border = "1px dashed black";
   tabPower.style.borderBottom = "none";
   tabPower.style.borderLeft = "none";
   tabItem.style.border = "1px solid black";
   tabItem.style.borderBottom = "none";
}

// パワータブに遷移
function changeTabPower() {
   powerContent.style.display = "block";
   itemContent.style.display = "none";
   tabItem.style.backgroundColor = "white";
   tabPower.style.backgroundColor = "lightgray";
   tabItem.style.border = "1px dashed black";
   tabItem.style.borderBottom = "none";
   tabItem.style.borderRight = "none";
   tabPower.style.border = "1px solid black";
   tabPower.style.borderBottom = "none";
}