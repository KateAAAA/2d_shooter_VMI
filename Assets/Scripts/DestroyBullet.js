var explode : GameObject;
function OnCollisionEnter(collision : Collision){
if(this.tag == "Bullet"){
if(collision.gameObject.tag != "Player")
	{
	Instantiate(explode, this.transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}
if(this.tag == "EnemyBullet"){
if(collision.gameObject.tag != "Enemy")
	{
	Instantiate(explode, this.transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}
}