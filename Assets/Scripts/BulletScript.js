var moveSpeed = Vector3(1,1,1);
var cursor : GameObject;

function Start () {
cursor = GameObject.Find("Cursor");
transform.LookAt(cursor.transform.position);

}

function Update () {
this.transform.position += Vector3.Scale(this.transform.forward, moveSpeed);
this.transform.position.y = 0.5;
}