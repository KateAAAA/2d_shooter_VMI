var enemyspawnRate : int = 10;
var percentage : int;
var enemy : GameObject;
var hpPickup : GameObject;
var drPickup : GameObject;
var boomBarrel : GameObject;
var amount : int = 0;
var maxamount : int = 100;

function Start () {
var i : int = 0;
while(i<100)
{
Instantiate(boomBarrel, Vector3(Random.Range(-95, 95), 1.5, Random.Range(-95, 95)), Quaternion.identity);
i++;
}
}

function Update () {
percentage = Random.Range(0,100);
enemyspawnRate+=.1 * Time.deltaTime;
if(percentage <= enemyspawnRate && amount < maxamount){
Instantiate(enemy, Vector3(Random.Range(-95, 95), 0.5, Random.Range(-95, 95)), Quaternion.identity);
amount += 1;
}
if(percentage<=1)
{
Instantiate(hpPickup, Vector3(Random.Range(-95, 95), 0.5, Random.Range(-95, 95)), Quaternion.identity);
}
if(percentage<=1)
{
Instantiate(drPickup, Vector3(Random.Range(-95, 95), 0.5, Random.Range(-95, 95)), Quaternion.identity);
}
}