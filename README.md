Website: http://lyfttest-env.eba-3xpcvy7g.us-east-1.elasticbeanstalk.com/
# Lyft apprenticeship entrance task.

![image](https://user-images.githubusercontent.com/50976344/122619367-2959bd80-d045-11eb-83d0-3a0110c4cd67.png)

## What is this?
This API' sole purpose is to take accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
Return a JSON object with the key “return_string” and a string containing every third letter from the original string.

## How to use:
Send a POST request to /test with the following payload

```
H- Content-type: "application/json"

{
  "string_to_cut": "Hello Lyft From Ran Vaknin."
}
    
```

And you should receive a response of the substring

```
{
  "return_string": "l fFmaVn."
}

```

This little project was a lot of fun. I put extra time on the front end to mock real API docs and added a little Lyft flair!

~Ran
