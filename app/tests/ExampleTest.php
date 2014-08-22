<?php

class ExampleTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testHome()
	{
        $this->call('GET', '/');
        $this->assertResponseOk();
	}

}
