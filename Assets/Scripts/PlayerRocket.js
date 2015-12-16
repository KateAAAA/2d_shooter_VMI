var moveSpeed : float =  0.4;
var cursor : GameObject;

function Start () {
cursor = GameObject.Find("Cursor");
transform.LookAt(cursor.transform.position);

}
function Update () {
this.transform.position += Vector3.Scale(transform.forward, Vector3(moveSpeed, moveSpeed, moveSpeed));
moveSpeed += 0.001;
transform.position.y = 1;
if(moveSpeed >= .05)
{
moveSpeed += 0.1;
}
if(moveSpeed >= .4)
{
moveSpeed = .4;
}
transform.eulerAngles.z += 10;
}