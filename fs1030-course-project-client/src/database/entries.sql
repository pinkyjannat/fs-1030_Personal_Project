CREATE TABLE IF NOT EXISTS `entries`

(
  `entry_id` INT NOT NULL AUTO_INCREMENT,
  `entry_name` VARCHAR(250) NOT NULL,
  `entry_email` VARCHAR(250) NOT NULL,
  `entry_phone` VARCHAR(250) NOT NULL,
  `entry_message` TEXT NOT NULL,
   PRIMARY KEY (`entry_id`)
);


SELECT * FROM entries;
DROP TABLE entries;
