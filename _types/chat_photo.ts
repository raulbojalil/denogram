// Copyright 2020 the denogram authors. All rights reserved. MIT license.
/**
 * Chat photo.
 * Ref: https://core.telegram.org/bots/api#chatphoto
 */
export interface ChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}
