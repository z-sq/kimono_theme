<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for Kimono Theme theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function kimono_theme_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['kimono_theme'] = [
    '#type' => 'details',
    '#title' => t('Kimono Theme'),
    '#open' => TRUE,
  ];

  $form['kimono_theme']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
