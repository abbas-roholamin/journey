<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_free_code_camp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'H<;+@!Rei.jnBv{ ]o1J~KN#lLjP)Of*13.b%_?GS%$mat68,OQqZe-8o+7kkt{-' );
define( 'SECURE_AUTH_KEY',  'iKMo;,=0FtX>_>c_i+<Lt<nKKWgKKM(|(yBAtn*_gGVs<xLyW^6rL0WO}2X]#u]I' );
define( 'LOGGED_IN_KEY',    'ppXqa:L4:Pp2XKiOG/,rn=9{.k?gKxj#*d|3ha/qg^s:pDhkh7ZnSkOE&8!Ql$c]' );
define( 'NONCE_KEY',        'P|I}E%KIzW/6H90M]$0-7oU5,>C-K<W3=)ngQ4M12QHvi=Nj?-CJyvRN+@882?-5' );
define( 'AUTH_SALT',        'J>1.BEC>~O6 }eO[Q)/Mn`?]5X Lzs6Bc;dFX}2*gU[2_,q[H$tlE}Kd|l5k0hj}' );
define( 'SECURE_AUTH_SALT', 'FRv#))AcI(U,H=S,S,vS7D3_NSy7ZI55 6XAJ$)m9d/-(F&ZrNGWi.f(e{&0Q8Yd' );
define( 'LOGGED_IN_SALT',   '>?^0<S#4HwQI6F}#_U0nCD1|G?.:D{Atn$cDUTXAfurpOs>p}T<.]cLl|y)T4kfs' );
define( 'NONCE_SALT',       'y/Fz|C[?8:1k#zj8una$;vUL4$UN/SDTa<6g!VrBG^=RoPke $I%IR)D}u4AU}z{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
