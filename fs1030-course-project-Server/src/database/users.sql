CREATE TABLE IF NOT EXISTS `users`

(
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(250) NOT NULL,
  `user_email` VARCHAR(250) NOT NULL,
  `user_phone` VARCHAR(250) NOT NULL,
  `user_password` TEXT NOT NULL,
   
   PRIMARY KEY (`user_email`)
   UNIQUE KEY (ID)
);

NSERT INTO users VALUES (2, 'Tom GREAT','tomGREAT@gmail.com','4064123200','123456');

SELECT * FROM users;