<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h2>Password Reset</h2>

		<div>
			To reset your password, complete this form: {{ URL::to('password/reset', array($token)) }}.
		</div>

		<!-- Username Form input -->
		<div class="form-group">
		    {{ Form::label('username', 'Username:') }}
		    {{ Form::text('username', null, ['class' => 'form-control']) }}
		</div>

		<!-- Email Form input -->
		<div class="form-group">
		    {{ Form::label('email', 'Email:') }}
		    {{ Form::text('email', null, ['class' => 'form-control']) }}
		</div>

        <!-- Password Form input -->
        <div class="form-group">
            {{ Form::label('password', 'Password:') }}
            {{ Form::password('password', ['class' => 'form-control']) }}
        </div>


	</body>
</html>
