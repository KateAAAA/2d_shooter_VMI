var explosion : GameObject;

function OnCollisionEnter(collision : Collision){
if(collision.gameObject.tag == "Bullet" || collision.gameObject.tag == "EnemyBullet")
	{
	Instantiate(explosion, this.transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
	
}